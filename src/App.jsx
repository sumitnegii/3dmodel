import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const WALL_HEIGHT = 2.8;
const WALL_THICKNESS = 0.22;

function box(scene, name, position, size, material, shadow = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = shadow;
  mesh.receiveShadow = shadow;
  scene.add(mesh);
  return mesh;
}

function roundedBox(scene, name, position, size, material, radius = 0.08, segments = 3, shadow = true) {
  const mesh = new THREE.Mesh(
    new RoundedBoxGeometry(size[0], size[1], size[2], segments, radius),
    material,
  );
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = shadow;
  mesh.receiveShadow = shadow;
  scene.add(mesh);
  return mesh;
}

function cylinder(scene, name, position, radiusTop, radiusBottom, height, material, segments = 32) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments),
    material,
  );
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function segmentBox(scene, name, start, end, height, thickness, material) {
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const length = Math.hypot(dx, dz);
  const mesh = box(
    scene,
    name,
    [(start[0] + end[0]) / 2, height / 2, (start[1] + end[1]) / 2],
    [length, height, thickness],
    material,
  );
  mesh.rotation.y = -Math.atan2(dz, dx);
  return mesh;
}

function shapeFloor(scene, name, points, y, material) {
  const shape = new THREE.Shape();
  points.forEach(([x, z], index) => {
    if (index === 0) shape.moveTo(x, z);
    else shape.lineTo(x, z);
  });
  shape.closePath();
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), material);
  mesh.name = name;
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = y;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function makeCanvasTexture(draw, width = 512, height = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

function makeNoiseTexture(base = '#ffffff', grain = 'rgba(0,0,0,0.08)', width = 512, height = 512) {
  return makeCanvasTexture((ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i += 1) {
      ctx.fillStyle = grain;
      const size = 1 + Math.random() * 2;
      ctx.fillRect(Math.random() * w, Math.random() * h, size, size);
    }
  }, width, height);
}

function makeLabel(text, subtext, width = 3.8, height = 1.45) {
  const texture = makeCanvasTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.01)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#161616';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 48px Arial';
    ctx.fillText(text, w / 2, h * 0.41);
    ctx.font = '400 38px Arial';
    ctx.fillText(subtext, w / 2, h * 0.68);
  });
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const label = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
  label.rotation.x = -Math.PI / 2;
  label.position.y = 0.04;
  return label;
}

function makeFloorMaterial(base, line, gridSize = 24) {
  return new THREE.MeshStandardMaterial({
    roughness: 0.82,
    metalness: 0.02,
    map: makeCanvasTexture((ctx, w, h) => {
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = line;
      ctx.lineWidth = 2;
      const step = w / gridSize;
      for (let i = 0; i <= gridSize; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * step, 0);
        ctx.lineTo(i * step, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * step);
        ctx.lineTo(w, i * step);
        ctx.stroke();
      }
      for (let i = 0; i < 400; i += 1) {
        ctx.fillStyle = `rgba(80,70,60,${Math.random() * 0.05})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, 1.4, 1.4);
      }
    }, 768, 768),
  });
}

function makeWoodMaterial() {
  return new THREE.MeshStandardMaterial({
    color: '#7b512d',
    roughness: 0.58,
    map: makeCanvasTexture((ctx, w, h) => {
      ctx.fillStyle = '#81572f';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 80; i += 1) {
        ctx.strokeStyle = `rgba(45,25,12,${0.08 + Math.random() * 0.14})`;
        ctx.lineWidth = 1 + Math.random() * 3;
        ctx.beginPath();
        const y = Math.random() * h;
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(w * 0.3, y + Math.random() * 30 - 15, w * 0.7, y - 18, w, y);
        ctx.stroke();
      }
    }),
  });
}

function room(scene, mats, spec) {
  const { x, z, w, d, name, size, floor = mats.tile } = spec;
  box(scene, `${name} floor`, [x, 0, z], [w, 0.08, d], floor, false);

  const label = makeLabel(name, size);
  label.position.set(x, 0.09, z);
  scene.add(label);
}

function wall(scene, mats, x, z, w, d, h = WALL_HEIGHT) {
  return box(scene, 'wall', [x, h / 2, z], [w, h, d], mats.wall);
}

function cap(scene, mats, x, z, w, d, y = WALL_HEIGHT + 0.06) {
  return box(scene, 'wall coping', [x, y, z], [w, 0.14, d], mats.wallCap);
}

function lowBoundary(scene, mats, x, z, w, d) {
  return box(scene, 'compound wall', [x, 0.65, z], [w, 1.3, d], mats.boundary);
}

function architecturalWindow(scene, mats, x, z, w, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 1.65, z);
  group.rotation.y = rotation;
  const glass = new THREE.Mesh(new THREE.BoxGeometry(w, 0.7, 0.04), mats.glass);
  group.add(glass);
  for (let i = -1; i <= 1; i += 1) {
    const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.76, 0.06), mats.frame);
    mullion.position.x = (i * w) / 3;
    group.add(mullion);
  }
  const top = new THREE.Mesh(new THREE.BoxGeometry(w + 0.18, 0.07, 0.08), mats.frame);
  top.position.y = 0.4;
  group.add(top);
  const bottom = top.clone();
  bottom.position.y = -0.4;
  group.add(bottom);
  scene.add(group);
}

function ventilator(scene, mats, x, z, w = 0.85, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 2.25, z);
  group.rotation.y = rotation;
  roundedBox(group, 'toilet ventilator glass', [0, 0, 0], [w, 0.34, 0.035], mats.glass, 0.02, 2);
  box(group, 'toilet ventilator frame top', [0, 0.2, 0], [w + 0.12, 0.045, 0.06], mats.frame);
  box(group, 'toilet ventilator frame bottom', [0, -0.2, 0], [w + 0.12, 0.045, 0.06], mats.frame);
  box(group, 'toilet ventilator mullion', [0, 0, 0], [0.035, 0.36, 0.06], mats.frame);
  scene.add(group);
}

function doorFrame(scene, mats, x, z, rotation = 0, w = 1.05) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  box(group, 'door frame left jamb', [-w / 2, 1.05, 0], [0.08, 2.1, 0.12], mats.darkWood);
  box(group, 'door frame right jamb', [w / 2, 1.05, 0], [0.08, 2.1, 0.12], mats.darkWood);
  box(group, 'door frame head', [0, 2.12, 0], [w + 0.08, 0.08, 0.12], mats.darkWood);
  scene.add(group);
}

function door(scene, mats, x, z, rotation = 0, open = 0.65) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.08, 0.08), mats.door);
  leaf.position.set(0.44 * Math.cos(open), 1.04, 0.44 * Math.sin(open));
  leaf.rotation.y = -open;
  leaf.castShadow = true;
  group.add(leaf);
  const handle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), mats.brass);
  handle.position.set(0.76, 1.06, 0.08);
  leaf.add(handle);
  scene.add(group);
}

function bed(scene, mats, x, z, rotation = 0, large = true) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  const w = large ? 2.55 : 2.25;
  const d = large ? 3.3 : 3.05;
  roundedBox(group, 'upholstered bed base', [0, 0.22, 0], [w, 0.42, d], mats.bedBase, 0.09, 4);
  roundedBox(group, 'wood bed plinth', [0, 0.12, -0.02], [w + 0.18, 0.18, d + 0.16], mats.darkWood, 0.04, 2);
  const mattress = roundedBox(group, 'soft mattress', [0, 0.5, -0.05], [w * 0.94, 0.34, d * 0.9], mats.mattress, 0.14, 5);
  mattress.position.y = 0.35;
  roundedBox(group, 'folded bed runner', [0, 0.62, -d * 0.12], [w * 0.88, 0.05, d * 0.38], mats.fabric, 0.04, 3);
  roundedBox(group, 'padded headboard', [0, 1.0, d * 0.48], [w + 0.25, 1.25, 0.22], mats.headboard, 0.08, 4);
  [-0.42, 0.42].forEach((px) => {
    box(group, 'headboard stitch', [px, 1.02, d * 0.36], [0.035, 0.96, 0.035], mats.darkWood);
  });
  [-0.55, 0.55].forEach((px) => {
    roundedBox(group, 'soft pillow', [px, 0.74, d * 0.27], [0.76, 0.2, 0.5], mats.pillow, 0.12, 5);
  });
  scene.add(group);
}

function sideTable(scene, mats, x, z) {
  roundedBox(scene, 'side table', [x, 0.28, z], [0.72, 0.56, 0.62], mats.wood, 0.035, 2);
  box(scene, 'side table drawer', [x, 0.38, z - 0.33], [0.54, 0.2, 0.035], mats.darkWood);
  cylinder(scene, 'side table knob', [x, 0.38, z - 0.36], 0.035, 0.035, 0.035, mats.brass, 12);
  cylinder(scene, 'lamp stem', [x, 0.85, z], 0.03, 0.03, 0.45, mats.brass, 12);
  cylinder(scene, 'lamp shade', [x, 1.16, z], 0.21, 0.28, 0.34, mats.lamp, 24);
}

function wardrobe(scene, mats, x, z, w, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, 2.25, 0.56), mats.wood);
  body.position.y = 1.13;
  group.add(body);
  for (let i = -1; i <= 1; i += 1) {
    const seam = new THREE.Mesh(new THREE.BoxGeometry(0.025, 2.1, 0.03), mats.darkWood);
    seam.position.set((i * w) / 4, 1.15, -0.29);
    group.add(seam);
  }
  scene.add(group);
}

function sofaSet(scene, mats) {
  const sofa = new THREE.Group();
  sofa.position.set(-11.4, 0, -12.5);
  roundedBox(sofa, 'sofa base cushion', [0, 0.44, 0], [3.25, 0.42, 0.94], mats.sofa, 0.16, 6);
  roundedBox(sofa, 'sofa back cushion', [0, 0.93, 0.48], [3.25, 0.96, 0.24], mats.sofa, 0.12, 5);
  roundedBox(sofa, 'sofa left arm', [-1.75, 0.72, 0], [0.28, 0.92, 0.96], mats.sofa, 0.11, 5);
  roundedBox(sofa, 'sofa right arm', [1.75, 0.72, 0], [0.28, 0.92, 0.96], mats.sofa, 0.11, 5);
  [-0.85, 0, 0.85].forEach((px) => {
    box(sofa, 'sofa cushion seam', [px, 0.68, -0.03], [0.025, 0.05, 0.82], mats.fabric);
    roundedBox(sofa, 'loose sofa pillow', [px, 0.94, 0.2], [0.52, 0.42, 0.16], mats.pillow, 0.08, 4);
  });
  scene.add(sofa);

  const chair = new THREE.Group();
  chair.position.set(-8.3, 0, -13.65);
  chair.rotation.y = -Math.PI / 2;
  roundedBox(chair, 'lounge chair seat', [0, 0.42, 0], [1.0, 0.42, 0.86], mats.sofa, 0.12, 5);
  roundedBox(chair, 'lounge chair back', [0, 0.9, 0.44], [1.0, 0.82, 0.18], mats.sofa, 0.1, 5);
  scene.add(chair);

  roundedBox(scene, 'glass coffee table top', [-10.1, 0.48, -14.6], [1.75, 0.08, 0.9], mats.glass, 0.04, 2);
  box(scene, 'coffee table base', [-10.1, 0.24, -14.6], [1.1, 0.32, 0.44], mats.wood);
  box(scene, 'drawing rug', [-10.5, 0.05, -13.3], [4.8, 0.05, 3.8], mats.rug, false);
}

function dining(scene, mats) {
  roundedBox(scene, 'dining table top', [0, 0.72, -1.2], [2.65, 0.18, 1.45], mats.wood, 0.05, 3);
  roundedBox(scene, 'dining glass inset', [0, 0.84, -1.2], [2.1, 0.035, 0.98], mats.glass, 0.035, 2);
  cylinder(scene, 'table leg', [-0.9, 0.35, -0.75], 0.05, 0.05, 0.7, mats.darkWood, 10);
  cylinder(scene, 'table leg', [0.9, 0.35, -0.75], 0.05, 0.05, 0.7, mats.darkWood, 10);
  cylinder(scene, 'table leg', [-0.9, 0.35, -1.65], 0.05, 0.05, 0.7, mats.darkWood, 10);
  cylinder(scene, 'table leg', [0.9, 0.35, -1.65], 0.05, 0.05, 0.7, mats.darkWood, 10);
  const spots = [
    [-1.55, -1.2, Math.PI / 2],
    [1.55, -1.2, -Math.PI / 2],
    [-0.8, -0.18, Math.PI],
    [0, -0.18, Math.PI],
    [0.8, -0.18, Math.PI],
    [-0.8, -2.22, 0],
    [0, -2.22, 0],
    [0.8, -2.22, 0],
  ];
  spots.forEach(([x, z, r]) => chair(scene, mats, x, z, r));
  for (let i = 0; i < 6; i += 1) {
    cylinder(scene, 'plate', [-0.95 + i * 0.38, 0.84, -1.15 + (i % 2) * 0.36], 0.15, 0.15, 0.025, mats.plate, 28);
  }
}

function chair(scene, mats, x, z, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  roundedBox(group, 'chair upholstered seat', [0, 0.42, 0], [0.48, 0.16, 0.46], mats.chairSeat, 0.07, 4);
  roundedBox(group, 'chair wood back', [0, 0.78, 0.26], [0.48, 0.68, 0.12], mats.chair, 0.05, 3);
  [-0.16, 0.16].forEach((px) => [-0.16, 0.16].forEach((pz) => {
    box(group, 'chair leg', [px, 0.19, pz], [0.06, 0.38, 0.06], mats.darkWood);
  }));
  scene.add(group);
}

function kitchen(scene, mats) {
  box(scene, 'kitchen lower cabinets rear', [2.9, 0.42, -13.05], [5.8, 0.84, 0.72], mats.counter);
  box(scene, 'kitchen lower cabinets side', [5.42, 0.42, -10.95], [0.72, 0.84, 3.9], mats.counter);
  box(scene, 'kitchen lower cabinets left', [0.65, 0.42, -10.8], [0.72, 0.84, 3.4], mats.counter);
  roundedBox(scene, 'granite slab rear', [2.9, 0.93, -13.05], [6.05, 0.16, 0.92], mats.granite, 0.04, 2);
  roundedBox(scene, 'granite slab side', [5.42, 0.93, -10.95], [0.92, 0.16, 4.08], mats.granite, 0.04, 2);
  roundedBox(scene, 'granite slab left', [0.65, 0.93, -10.8], [0.92, 0.16, 3.58], mats.granite, 0.04, 2);
  roundedBox(scene, 'double door fridge', [0.65, 1.05, -8.85], [0.95, 2.1, 0.88], mats.fridge, 0.06, 3);
  box(scene, 'fridge divider', [0.65, 1.05, -9.31], [0.04, 1.9, 0.03], mats.darkMetal);
  box(scene, 'fridge handle left', [0.52, 1.15, -9.35], [0.04, 1.1, 0.045], mats.steel);
  box(scene, 'fridge handle right', [0.78, 1.15, -9.35], [0.04, 1.1, 0.045], mats.steel);
  roundedBox(scene, 'steel sink basin', [2.7, 0.99, -13.12], [1.05, 0.12, 0.54], mats.sink, 0.05, 3);
  roundedBox(scene, 'dark sink hollow', [2.7, 1.06, -13.12], [0.78, 0.04, 0.36], mats.darkMetal, 0.04, 2);
  cylinder(scene, 'sink tap stem', [2.25, 1.22, -13.05], 0.03, 0.03, 0.38, mats.steel, 16);
  cylinder(scene, 'sink tap neck', [2.35, 1.38, -13.05], 0.025, 0.025, 0.28, mats.steel, 16).rotation.z = Math.PI / 2;
  roundedBox(scene, 'black glass hob', [5.43, 1.04, -11.15], [0.66, 0.08, 0.95], mats.hob, 0.035, 2);
  roundedBox(scene, 'wall chimney hood', [5.43, 2.05, -11.15], [0.95, 0.38, 0.62], mats.steel, 0.04, 2);
  box(scene, 'chimney flue', [5.43, 2.55, -11.15], [0.34, 0.7, 0.32], mats.steel);
  for (let i = 0; i < 4; i += 1) {
    cylinder(scene, 'brass burner ring', [5.43 + (i % 2) * 0.24 - 0.12, 1.1, -11.34 + Math.floor(i / 2) * 0.38], 0.1, 0.1, 0.025, mats.brass, 24);
  }
  for (let i = 0; i < 7; i += 1) {
    box(scene, 'cabinet handle', [0.64 + i * 0.7, 0.68, -13.45], [0.32, 0.035, 0.035], mats.brass);
  }
  box(scene, 'kitchen backsplash', [2.9, 1.35, -13.48], [5.7, 0.82, 0.08], mats.backsplash);
  box(scene, 'overhead cabinet', [3.3, 2.05, -13.45], [3.4, 0.75, 0.34], mats.wood);
  box(scene, 'overhead cabinet split left', [2.72, 2.05, -13.64], [0.035, 0.62, 0.035], mats.darkWood);
  box(scene, 'overhead cabinet split right', [3.88, 2.05, -13.64], [0.035, 0.62, 0.035], mats.darkWood);
}

function bathroom(scene, mats, x, z, w, d) {
  box(scene, 'bath floor', [x, 0.1, z], [w, 0.08, d], mats.bathTile, false);
  box(scene, 'bath wall tile rear', [x, 0.92, z - d * 0.49], [w * 0.92, 1.65, 0.055], mats.bathWallTile, false);
  box(scene, 'bath wall tile side', [x - w * 0.48, 0.92, z], [0.055, 1.65, d * 0.9], mats.bathWallTile, false);
  box(scene, 'toilet tank', [x + w * 0.25, 0.55, z - d * 0.25], [0.52, 0.48, 0.22], mats.ceramic);
  cylinder(scene, 'toilet bowl', [x + w * 0.25, 0.36, z - d * 0.02], 0.25, 0.2, 0.22, mats.ceramic, 32);
  box(scene, 'sink cabinet', [x - w * 0.25, 0.4, z + d * 0.25], [0.65, 0.4, 0.42], mats.ceramic);
  cylinder(scene, 'wash basin', [x - w * 0.25, 0.68, z + d * 0.25], 0.28, 0.22, 0.13, mats.ceramic, 32);
  box(scene, 'shower glass', [x - w * 0.32, 0.9, z - d * 0.27], [0.04, 1.35, 1.05], mats.glass);
  cylinder(scene, 'floor drain', [x - w * 0.25, 0.16, z - d * 0.28], 0.11, 0.11, 0.018, mats.darkMetal, 24);
  box(scene, 'wash mirror', [x - w * 0.25, 1.42, z + d * 0.48], [0.62, 0.72, 0.035], mats.mirror);
}

function puja(scene, mats) {
  box(scene, 'puja platform', [0, 0.22, 6.2], [2.55, 0.44, 0.74], mats.marble);
  box(scene, 'puja backdrop', [0, 1.12, 6.56], [2.25, 1.75, 0.18], mats.wood);
  cylinder(scene, 'diya', [-0.55, 0.55, 5.97], 0.09, 0.07, 0.08, mats.brass, 18);
  cylinder(scene, 'diya', [0.55, 0.55, 5.97], 0.09, 0.07, 0.08, mats.brass, 18);
  const deity = makeLabel('ॐ', '', 1.0, 1.0);
  deity.position.set(0, 1.22, 6.45);
  deity.rotation.set(0, 0, 0);
  scene.add(deity);
}

function dresser(scene, mats) {
  box(scene, 'dresser cabinet', [0, 0.55, 10.2], [3.15, 1.1, 0.65], mats.wood);
  box(scene, 'dresser mirror', [0, 1.7, 10.52], [2.4, 1.2, 0.06], mats.glass);
  box(scene, 'dresser shelf', [0, 2.28, 10.2], [3.2, 0.16, 0.72], mats.darkWood);
  [-0.9, 0, 0.9].forEach((px) => {
    box(scene, 'dresser vertical shutter line', [px, 1.08, 9.86], [0.035, 1.85, 0.04], mats.darkWood);
  });
  box(scene, 'dresser upper shelf line', [0, 1.85, 9.86], [3.0, 0.035, 0.04], mats.darkWood);
}

function stairs(scene, mats) {
  const x = 9.9;
  const startZ = -14.4;
  const rise = 0.16;
  const run = 0.68;
  for (let i = 0; i < 15; i += 1) {
    const y = 0.28 + i * rise;
    const z = startZ + i * run;
    box(scene, 'open stair tread', [x, y, z], [4.25, 0.11, 0.58], mats.stairStone);
    box(scene, 'stair dark nosing', [x, y + 0.075, z - 0.27], [4.2, 0.035, 0.045], mats.darkMetal);
  }
  box(scene, 'upper stair landing slab', [x, 2.75, -3.55], [4.25, 0.16, 2.2], mats.stairStone);
  box(scene, 'open stair left rail', [7.68, 1.95, -8.9], [0.08, 0.08, 10.4], mats.steel);
  box(scene, 'open stair right rail', [12.12, 1.95, -8.9], [0.08, 0.08, 10.4], mats.steel);
  box(scene, 'open stair center rail', [9.9, 2.05, -8.9], [0.08, 0.08, 10.0], mats.darkMetal);
  for (let i = 0; i < 8; i += 1) {
    const z = -13.7 + i * 1.35;
    const y = 0.65 + i * 0.22;
    cylinder(scene, 'open stair left post', [7.68, y, z], 0.035, 0.035, 1.35, mats.steel, 12);
    cylinder(scene, 'open stair right post', [12.12, y, z], 0.035, 0.035, 1.35, mats.steel, 12);
    cylinder(scene, 'open stair center post', [9.9, y + 0.05, z], 0.028, 0.028, 1.25, mats.darkMetal, 12);
  }
  for (let i = 0; i < 4; i += 1) {
    const z = -13.6 + i * 2.65;
    box(scene, 'stair support column left', [7.85, 0.72, z], [0.18, 1.44, 0.18], mats.boundary);
    box(scene, 'stair support column right', [11.95, 0.72, z], [0.18, 1.44, 0.18], mats.boundary);
  }
}

function shrub(scene, mats, x, z, scale = 1, flower = null) {
  cylinder(scene, 'shrub trunk', [x, 0.2 * scale, z], 0.02 * scale, 0.03 * scale, 0.4 * scale, mats.trunk, 8);
  cylinder(scene, 'shrub crown', [x, 0.52 * scale, z], 0.34 * scale, 0.15 * scale, 0.52 * scale, mats.leaf, 14);
  if (flower) {
    roundedBox(scene, 'flower cluster', [x + 0.12 * scale, 0.64 * scale, z - 0.08 * scale], [0.18 * scale, 0.08 * scale, 0.18 * scale], flower, 0.04, 3);
  }
}

function garden(scene, mats) {
  const beds = [
    [-14.8, 0, 3.5, 1.2, 34],
    [14.8, 0, 3.5, 1.2, 34],
    [-9.2, -20.55, 8.2, 1.45, 16],
    [12.2, -20.55, 3.9, 1.15, 16],
  ];
  beds.forEach(([x, z, w, d]) => {
    box(scene, 'garden bed', [x, 0.04, z], [w, 0.08, d], mats.grass, false);
  });
  const plantPositions = [
    [-14.8, -16], [-14.8, -11], [-14.8, -6], [-14.8, -1], [-14.8, 4], [-14.8, 9], [-14.8, 15],
    [14.8, -15], [14.8, -9], [14.8, -3], [14.8, 3], [14.8, 9], [14.8, 15],
  ];
  plantPositions.forEach(([x, z], index) => {
    cylinder(scene, 'plant trunk', [x, 0.36, z], 0.035, 0.05, 0.72, mats.trunk, 8);
    cylinder(scene, 'plant crown', [x, 0.92, z], 0.42 + (index % 3) * 0.06, 0.2, 0.9, mats.leaf, 18);
  });
  [
    [-12.1, -20.55, 0.92, mats.flowerPink],
    [-10.8, -20.5, 0.78, mats.flowerYellow],
    [-9.5, -20.55, 0.86, mats.flowerRed],
    [-8.2, -20.5, 0.8, mats.flowerPink],
    [-6.8, -20.55, 0.92, mats.flowerYellow],
    [11.2, -20.55, 0.78, mats.flowerRed],
    [12.5, -20.55, 0.82, mats.flowerPink],
  ].forEach(([x, z, scale, flower]) => shrub(scene, mats, x, z, scale, flower));
}

function car(scene, mats, x, z, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;

  roundedBox(group, 'car lower body', [0, 0.48, 0], [2.18, 0.64, 5.2], mats.carPaint, 0.18, 6);
  roundedBox(group, 'car upper cabin', [0, 1.02, -0.18], [1.68, 0.74, 2.45], mats.carPaint, 0.16, 6);
  roundedBox(group, 'front windshield', [0, 1.14, -1.28], [1.42, 0.08, 0.78], mats.carGlass, 0.04, 2);
  roundedBox(group, 'rear windshield', [0, 1.13, 1.02], [1.38, 0.08, 0.68], mats.carGlass, 0.04, 2);

  [-0.86, 0.86].forEach((px) => {
    roundedBox(group, 'side window', [px, 1.1, -0.15], [0.07, 0.5, 1.52], mats.carGlass, 0.035, 2);
    roundedBox(group, 'side mirror', [px * 1.12, 0.92, -1.52], [0.16, 0.08, 0.24], mats.darkMetal, 0.025, 2);
  });

  [-0.78, 0.78].forEach((px) => {
    roundedBox(group, 'head light', [px, 0.55, -2.64], [0.38, 0.13, 0.05], mats.headlight, 0.025, 2);
    roundedBox(group, 'tail light', [px, 0.58, 2.64], [0.3, 0.15, 0.05], mats.tailLight, 0.025, 2);
  });

  [-1.08, 1.08].forEach((px) => {
    [-1.75, 1.75].forEach((pz) => {
      const wheel = cylinder(group, 'car tyre', [px, 0.28, pz], 0.33, 0.33, 0.24, mats.tyre, 32);
      wheel.rotation.z = Math.PI / 2;
      const rim = cylinder(group, 'car wheel rim', [px + Math.sign(px) * 0.01, 0.28, pz], 0.18, 0.18, 0.26, mats.steel, 24);
      rim.rotation.z = Math.PI / 2;
    });
  });

  box(group, 'front number plate', [0, 0.42, -2.67], [0.62, 0.13, 0.025], mats.plate, false);
  box(group, 'rear number plate', [0, 0.44, 2.67], [0.58, 0.13, 0.025], mats.plate, false);
  scene.add(group);
}

function parkingCourt(scene, mats) {
  box(scene, 'parking tile court', [4.5, 0.015, -20.25], [16.2, 0.08, 6.9], mats.parkingTile, false);
  box(scene, 'parking curb left', [-3.7, 0.17, -20.25], [0.22, 0.34, 6.9], mats.boundary);
  box(scene, 'parking curb rear', [4.5, 0.17, -16.68], [16.2, 0.34, 0.22], mats.boundary);
  box(scene, 'parking bay line left', [1.7, 0.085, -20.55], [0.08, 0.035, 5.9], mats.linePaint, false);
  box(scene, 'parking bay line right', [7.0, 0.085, -20.55], [0.08, 0.035, 5.9], mats.linePaint, false);
  box(scene, 'parking stop block left', [3.2, 0.14, -18.0], [1.1, 0.18, 0.18], mats.boundary);
  box(scene, 'parking stop block right', [5.5, 0.14, -18.0], [1.1, 0.18, 0.18], mats.boundary);

  const label = makeLabel('PARKING', "18'-6\" X 16'-0\"", 3.4, 0.95);
  label.position.set(10.4, 0.11, -17.2);
  scene.add(label);

  car(scene, mats, 4.35, -20.65, 0);
}

function exteriorDetails(scene, mats) {
  box(scene, 'right pedestrian path', [17.7, 0.02, -15.3], [1.85, 0.08, 17.8], mats.pathTile, false);
  box(scene, 'right path curb', [16.65, 0.18, -15.3], [0.18, 0.36, 17.8], mats.boundary);
  box(scene, 'front dark compound coping left', [-7.5, 1.36, -23.6], [17.5, 0.18, 0.52], mats.darkCoping);
  box(scene, 'front dark compound coping right', [10.4, 1.36, -23.6], [11.2, 0.18, 0.52], mats.darkCoping);
  box(scene, 'gate pillar left', [2.55, 0.82, -23.55], [0.55, 1.64, 0.58], mats.boundary);
  box(scene, 'gate pillar right', [6.45, 0.82, -23.55], [0.55, 1.64, 0.58], mats.boundary);
  box(scene, 'gate top rail', [4.5, 1.45, -23.36], [3.35, 0.08, 0.12], mats.frame);
  box(scene, 'gate bottom rail', [4.5, 0.24, -23.36], [3.35, 0.08, 0.12], mats.frame);
  box(scene, 'front planter retaining wall', [-9.2, 0.28, -19.72], [8.35, 0.32, 0.28], mats.boundary);
  box(scene, 'drawing room sill', [-10.2, 1.35, -16.98], [4.35, 0.12, 0.16], mats.wallCap);
  box(scene, 'kitchen window sill', [2.9, 1.35, -14.48], [3.55, 0.12, 0.16], mats.wallCap);

  [
    [-13.42, 17, 0.5, 0.55],
    [13.42, 17, 0.5, 0.55],
    [-13.42, -16.95, 0.5, 0.55],
    [13.42, -16.95, 0.5, 0.55],
  ].forEach(([x, z, w, d]) => box(scene, 'corner pier', [x, 1.48, z], [w, 0.46, d], mats.wallCap));
}

function addLinearTrim(scene, mats, segments, material = mats.skirting) {
  segments.forEach(([x, z, w, d]) => {
    box(scene, 'room skirting', [x, 0.18, z], [w, 0.18, d], material, false);
  });
}

function architecturalDetails(scene, mats) {
  addLinearTrim(scene, mats, [
    [-6.37, 0.8, 0.06, 33.4],
    [5.67, 5.2, 0.06, 18.2],
    [-0.1, 16.87, 27.0, 0.06],
    [-13.27, 1.4, 0.06, 34.5],
    [13.27, 4.1, 0.06, 29.0],
    [-9.95, -16.82, 6.8, 0.06],
    [0.1, 11.57, 4.5, 0.06],
    [0.1, 5.47, 4.5, 0.06],
    [-10.8, 2.67, 5.0, 0.06],
    [-10.8, -1.62, 5.0, 0.06],
    [8.9, 7.97, 7.0, 0.06],
    [10.0, -12.87, 4.8, 0.06],
    [0.95, -14.32, 5.0, 0.06],
    [-9.8, 8.92, 7.0, 0.06],
  ]);

  [
    [-5.95, 7.3, Math.PI / 2],
    [5.9, 7.4, -Math.PI / 2],
    [-2.1, 5.8, 0],
    [3.0, 5.8, Math.PI],
    [-4.2, -14.7, Math.PI / 2],
    [7.2, -14.6, Math.PI],
    [-8.45, 2.75, Math.PI],
    [-8.2, 9.05, 0],
  ].forEach(([x, z, rotation]) => doorFrame(scene, mats, x, z, rotation));

  ventilator(scene, mats, -13.42, 5.0, 0.9, Math.PI / 2);
  ventilator(scene, mats, -13.42, 0.4, 1.05, Math.PI / 2);
  architecturalWindow(scene, mats, -2.3, 17.05, 2.4);
  architecturalWindow(scene, mats, 11.0, 17.05, 2.1);

  box(scene, 'puja warm light wash', [0, 1.95, 6.35], [1.8, 0.06, 0.08], mats.warmLight);
  box(scene, 'temple side column left', [-0.82, 1.08, 6.25], [0.12, 1.12, 0.12], mats.brass);
  box(scene, 'temple side column right', [0.82, 1.08, 6.25], [0.12, 1.12, 0.12], mats.brass);
}

function createMaterials() {
  const tile = makeFloorMaterial('#b7aa96', 'rgba(56,50,43,0.32)', 18);
  tile.map.wrapS = tile.map.wrapT = THREE.RepeatWrapping;
  tile.map.repeat.set(5, 7);

  const bathTile = makeFloorMaterial('#78909a', 'rgba(24,36,42,0.38)', 12);
  const terrace = makeFloorMaterial('#918b82', 'rgba(46,44,41,0.34)', 20);
  const parkingTile = makeFloorMaterial('#89837a', 'rgba(38,36,34,0.38)', 14);
  parkingTile.map.wrapS = parkingTile.map.wrapT = THREE.RepeatWrapping;
  parkingTile.map.repeat.set(3, 2);
  const pathTile = makeFloorMaterial('#a99c8e', 'rgba(60,54,48,0.3)', 12);
  pathTile.map.wrapS = pathTile.map.wrapT = THREE.RepeatWrapping;
  pathTile.map.repeat.set(1, 6);
  const stairStone = makeFloorMaterial('#b9b5ad', 'rgba(55,55,52,0.28)', 8);
  stairStone.map.wrapS = stairStone.map.wrapT = THREE.RepeatWrapping;
  stairStone.map.repeat.set(1, 2);
  const wood = makeWoodMaterial();
  const wallBump = makeNoiseTexture('#808080', 'rgba(0,0,0,0.13)');
  wallBump.wrapS = wallBump.wrapT = THREE.RepeatWrapping;
  wallBump.repeat.set(12, 12);
  const boundaryBump = makeNoiseTexture('#777777', 'rgba(0,0,0,0.16)');
  boundaryBump.wrapS = boundaryBump.wrapT = THREE.RepeatWrapping;
  boundaryBump.repeat.set(10, 10);

  return {
    tile,
    bathTile,
    terrace,
    parkingTile,
    pathTile,
    stairStone,
    wood,
    darkWood: new THREE.MeshStandardMaterial({ color: '#3f2415', roughness: 0.55 }),
    wallCap: new THREE.MeshStandardMaterial({ color: '#8d8982', roughness: 0.86 }),
    darkCoping: new THREE.MeshStandardMaterial({ color: '#3e3f3c', roughness: 0.82 }),
    skirting: new THREE.MeshStandardMaterial({ color: '#746b5f', roughness: 0.78 }),
    wall: new THREE.MeshStandardMaterial({
      color: '#b9b0a3',
      roughness: 0.92,
      bumpMap: wallBump,
      bumpScale: 0.035,
    }),
    boundary: new THREE.MeshStandardMaterial({
      color: '#746f68',
      roughness: 0.88,
      bumpMap: boundaryBump,
      bumpScale: 0.05,
    }),
    frame: new THREE.MeshStandardMaterial({ color: '#1f2c32', roughness: 0.45 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: '#8fb4c8',
      roughness: 0.12,
      metalness: 0,
      transparent: true,
      opacity: 0.45,
      transmission: 0.3,
      clearcoat: 0.65,
      clearcoatRoughness: 0.08,
    }),
    door: wood,
    brass: new THREE.MeshStandardMaterial({ color: '#c08a36', metalness: 0.6, roughness: 0.28 }),
    bedBase: new THREE.MeshStandardMaterial({ color: '#7c5b43', roughness: 0.65 }),
    headboard: new THREE.MeshStandardMaterial({ color: '#6f4b31', roughness: 0.72 }),
    mattress: new THREE.MeshStandardMaterial({ color: '#cbbda9', roughness: 0.9 }),
    fabric: new THREE.MeshStandardMaterial({ color: '#7f7467', roughness: 0.92 }),
    pillow: new THREE.MeshStandardMaterial({ color: '#bba994', roughness: 0.9 }),
    sofa: new THREE.MeshStandardMaterial({ color: '#a9957b', roughness: 0.88 }),
    rug: makeFloorMaterial('#827362', 'rgba(255,255,255,0.08)', 10),
    chair: new THREE.MeshStandardMaterial({ color: '#8d6943', roughness: 0.68 }),
    chairSeat: new THREE.MeshStandardMaterial({ color: '#bba58c', roughness: 0.86 }),
    plate: new THREE.MeshStandardMaterial({ color: '#d2c6b4', roughness: 0.5 }),
    counter: new THREE.MeshStandardMaterial({ color: '#705238', roughness: 0.5 }),
    granite: makeFloorMaterial('#8a7860', 'rgba(30,25,20,0.12)', 9),
    backsplash: makeFloorMaterial('#b9afa1', 'rgba(70,66,60,0.3)', 8),
    bathWallTile: makeFloorMaterial('#7f969f', 'rgba(22,33,38,0.32)', 10),
    fridge: new THREE.MeshStandardMaterial({ color: '#7f8586', metalness: 0.35, roughness: 0.32 }),
    sink: new THREE.MeshStandardMaterial({ color: '#969ca0', metalness: 0.45, roughness: 0.22 }),
    mirror: new THREE.MeshPhysicalMaterial({
      color: '#a7c1c9',
      metalness: 0.2,
      roughness: 0.08,
      transparent: true,
      opacity: 0.72,
      clearcoat: 1,
    }),
    hob: new THREE.MeshStandardMaterial({ color: '#141414', roughness: 0.25 }),
    darkMetal: new THREE.MeshStandardMaterial({ color: '#101214', metalness: 0.7, roughness: 0.25 }),
    carPaint: new THREE.MeshPhysicalMaterial({
      color: '#2f3437',
      metalness: 0.65,
      roughness: 0.24,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08,
    }),
    carGlass: new THREE.MeshPhysicalMaterial({
      color: '#172a34',
      roughness: 0.05,
      metalness: 0,
      transparent: true,
      opacity: 0.62,
      transmission: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
    }),
    tyre: new THREE.MeshStandardMaterial({ color: '#090909', roughness: 0.78 }),
    headlight: new THREE.MeshStandardMaterial({ color: '#fff5c8', emissive: '#ffe29a', emissiveIntensity: 0.35, roughness: 0.2 }),
    tailLight: new THREE.MeshStandardMaterial({ color: '#9e1111', emissive: '#7a0505', emissiveIntensity: 0.18, roughness: 0.28 }),
    linePaint: new THREE.MeshStandardMaterial({ color: '#d6d0c4', roughness: 0.58 }),
    ceramic: new THREE.MeshStandardMaterial({ color: '#c9c1b5', roughness: 0.36 }),
    marble: makeFloorMaterial('#aaa297', 'rgba(58,55,52,0.26)', 10),
    steel: new THREE.MeshStandardMaterial({ color: '#858b8c', metalness: 0.7, roughness: 0.22 }),
    grass: new THREE.MeshStandardMaterial({ color: '#355f26', roughness: 0.95, bumpMap: boundaryBump, bumpScale: 0.08 }),
    leaf: new THREE.MeshStandardMaterial({ color: '#2f6f2e', roughness: 0.9 }),
    flowerPink: new THREE.MeshStandardMaterial({ color: '#c43d72', roughness: 0.75 }),
    flowerRed: new THREE.MeshStandardMaterial({ color: '#b02b22', roughness: 0.75 }),
    flowerYellow: new THREE.MeshStandardMaterial({ color: '#d4a629', roughness: 0.75 }),
    trunk: new THREE.MeshStandardMaterial({ color: '#5a3a1e', roughness: 0.8 }),
    lamp: new THREE.MeshStandardMaterial({ color: '#f1dfbd', emissive: '#b97826', emissiveIntensity: 0.35 }),
    warmLight: new THREE.MeshStandardMaterial({ color: '#f3c46f', emissive: '#d98a1f', emissiveIntensity: 0.65 }),
  };
}

function buildModel(scene) {
  const mats = createMaterials();
  const plot = {
    frontLeft: [-16.2, -24.0],
    frontRight: [16.2, -24.0],
    backRight: [14.8, 21.9],
    backLeft: [-15.8, 24.6],
  };

  shapeFloor(
    scene,
    'tilted plot floor',
    [plot.frontLeft, plot.frontRight, plot.backRight, plot.backLeft],
    -0.04,
    mats.terrace,
  );
  box(scene, 'road', [0, -0.08, -27.2], [36, 0.08, 5.2], new THREE.MeshStandardMaterial({ color: '#4a4a48', roughness: 0.88 }), false);
  segmentBox(scene, 'sloped rear compound wall', plot.backLeft, plot.backRight, 1.3, 0.45, mats.boundary);
  segmentBox(scene, 'left compound wall', plot.frontLeft, plot.backLeft, 1.3, 0.45, mats.boundary);
  segmentBox(scene, 'right compound wall', plot.frontRight, plot.backRight, 1.3, 0.45, mats.boundary);
  lowBoundary(scene, mats, -7.5, -23.6, 17.5, 0.45);
  lowBoundary(scene, mats, 10.4, -23.6, 11.2, 0.45);
  box(scene, 'front gate', [4.5, 0.75, -23.55], [3.4, 1.5, 0.18], mats.frame);
  for (let i = 0; i < 9; i += 1) {
    box(scene, 'gate bars', [3.05 + i * 0.36, 0.82, -23.4], [0.05, 1.42, 0.12], mats.frame);
  }
  parkingCourt(scene, mats);
  exteriorDetails(scene, mats);

  const rooms = [
    { name: 'BEDROOM', size: '12-7 X 12-11', x: -8.5, z: 12.6, w: 7.6, d: 8.7 },
    { name: 'BEDROOM', size: '10-3 X 11', x: 7.15, z: 12.55, w: 6.9, d: 8.2 },
    { name: 'DRESSER', size: '5-8 X 3-3', x: 0.2, z: 13.65, w: 4.1, d: 3.0 },
    { name: 'PUJA', size: '4-6 X 6-11', x: 0.15, z: 7.95, w: 3.7, d: 4.4 },
    { name: 'DINING', size: '17-3 X 10-8', x: 0, z: -1.35, w: 8.3, d: 8.8 },
    { name: 'KITCHEN', size: '10-6 X 10-8', x: 3.1, z: -11.3, w: 5.6, d: 6.2 },
    { name: 'DRAWING ROOM', size: '15-7 X 12-6', x: -9.9, z: -13.35, w: 7.8, d: 7.0 },
    { name: 'TOI', size: '8-5 X 4-1', x: -10.7, z: 5.0, w: 4.1, d: 2.95, floor: mats.bathTile },
    { name: 'TOI', size: '9-2 X 6-8', x: -10.9, z: 0.4, w: 4.8, d: 3.7, floor: mats.bathTile },
  ];
  rooms.forEach((spec) => room(scene, mats, spec));

  wall(scene, mats, -6.5, 0.8, WALL_THICKNESS, 34);
  wall(scene, mats, 5.8, 5.2, WALL_THICKNESS, 18.8);
  wall(scene, mats, -0.1, 17, 27.5, WALL_THICKNESS);
  wall(scene, mats, -13.4, 1.4, WALL_THICKNESS, 35.1);
  wall(scene, mats, 13.4, 4.1, WALL_THICKNESS, 29.8);
  wall(scene, mats, -9.95, -16.95, 7.1, WALL_THICKNESS);
  wall(scene, mats, 0.1, 11.7, 4.8, WALL_THICKNESS);
  wall(scene, mats, 0.1, 5.6, 4.8, WALL_THICKNESS);
  wall(scene, mats, -10.8, 2.8, 5.3, WALL_THICKNESS);
  wall(scene, mats, -10.8, -1.75, 5.3, WALL_THICKNESS);
  wall(scene, mats, 8.9, 8.1, 7.3, WALL_THICKNESS);
  wall(scene, mats, 6.3, -7.8, WALL_THICKNESS, 12.4);
  wall(scene, mats, 10.0, -13.0, 5.0, WALL_THICKNESS);
  wall(scene, mats, 0.95, -14.45, 5.3, WALL_THICKNESS);
  wall(scene, mats, -3.7, -10.5, WALL_THICKNESS, 7.4);
  wall(scene, mats, -9.8, 9.05, 7.4, WALL_THICKNESS);
  architecturalDetails(scene, mats);
  cap(scene, mats, -6.5, 0.8, WALL_THICKNESS + 0.08, 34.1);
  cap(scene, mats, 5.8, 5.2, WALL_THICKNESS + 0.08, 18.9);
  cap(scene, mats, -0.1, 17, 27.6, WALL_THICKNESS + 0.08);
  cap(scene, mats, -13.4, 1.4, WALL_THICKNESS + 0.08, 35.2);
  cap(scene, mats, 13.4, 4.1, WALL_THICKNESS + 0.08, 29.9);
  cap(scene, mats, -9.95, -16.95, 7.2, WALL_THICKNESS + 0.08);
  cap(scene, mats, 10.0, -13.0, 5.1, WALL_THICKNESS + 0.08);

  architecturalWindow(scene, mats, -8.7, 17.05, 3.5);
  architecturalWindow(scene, mats, 7.2, 17.05, 3.2);
  architecturalWindow(scene, mats, -10.2, -16.98, 4.0);
  architecturalWindow(scene, mats, 2.9, -14.48, 3.2);
  door(scene, mats, -5.95, 7.3, Math.PI / 2, 0.72);
  door(scene, mats, 5.9, 7.4, -Math.PI / 2, 0.72);
  door(scene, mats, -2.1, 5.8, 0, 0.72);
  door(scene, mats, 3.0, 5.8, Math.PI, 0.72);
  door(scene, mats, -4.2, -14.7, Math.PI / 2, 0.65);
  door(scene, mats, 7.2, -14.6, Math.PI, 0.64);
  door(scene, mats, -8.45, 2.75, Math.PI, 0.65);
  door(scene, mats, -8.2, 9.05, 0, 0.68);

  bed(scene, mats, -9.0, 13.4, Math.PI / 2, true);
  bed(scene, mats, 8.5, 13.0, -Math.PI / 2, false);
  wardrobe(scene, mats, -12.6, 12.6, 4.8, Math.PI / 2);
  wardrobe(scene, mats, 9.0, 9.05, 3.8, 0);
  sideTable(scene, mats, -11.6, 15.2);
  sideTable(scene, mats, -11.6, 11.3);
  sideTable(scene, mats, 11.5, 14.5);
  sideTable(scene, mats, 11.4, 11.1);
  sofaSet(scene, mats);
  dining(scene, mats);
  kitchen(scene, mats);
  bathroom(scene, mats, -10.7, 5.0, 4.1, 2.95);
  bathroom(scene, mats, -10.9, 0.4, 4.8, 3.7);
  puja(scene, mats);
  dresser(scene, mats);
  stairs(scene, mats);
  garden(scene, mats);
}

function getCameraPose(width, height, view = 'perspective') {
  const isMobile = width < 720 || height > width * 1.15;
  if (view === 'top') {
    return {
      position: new THREE.Vector3(0, isMobile ? 68 : 55, isMobile ? 0.6 : 0.1),
      target: new THREE.Vector3(0, 0, -1.5),
      fov: isMobile ? 54 : 45,
    };
  }

  return {
    position: isMobile
      ? new THREE.Vector3(26, 42, 54)
      : new THREE.Vector3(22, 38, 44),
    target: new THREE.Vector3(0, 0, isMobile ? -2 : 0),
    fov: isMobile ? 52 : 45,
  };
}

export default function App() {
  const hostRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const viewRef = useRef('perspective');

  useEffect(() => {
    const host = hostRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#9e968b');
    scene.fog = new THREE.Fog('#9e968b', 78, 122);

    const camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 160);
    const initialPose = getCameraPose(host.clientWidth, host.clientHeight);
    camera.position.copy(initialPose.position);
    camera.fov = initialPose.fov;
    camera.lookAt(initialPose.target);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, host.clientWidth < 720 ? 1.5 : 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.52;
    host.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.015).texture;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(initialPose.target);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.screenSpacePanning = true;
    controls.minDistance = 15;
    controls.maxDistance = host.clientWidth < 720 ? 88 : 72;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    controlsRef.current = controls;

    scene.add(new THREE.HemisphereLight('#f3eadc', '#5f574f', 0.42));
    const sun = new THREE.DirectionalLight('#fff1d4', 1.65);
    sun.position.set(-12, 28, 18);
    sun.castShadow = true;
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 35;
    sun.shadow.camera.bottom = -35;
    sun.shadow.mapSize.set(2048, 2048);
    scene.add(sun);
    const fill = new THREE.DirectionalLight('#b7d4ff', 0.12);
    fill.position.set(22, 15, -28);
    scene.add(fill);

    buildModel(scene);

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = host;
      const pose = getCameraPose(clientWidth, clientHeight, viewRef.current);
      camera.aspect = clientWidth / clientHeight;
      camera.fov = pose.fov;
      camera.updateProjectionMatrix();
      camera.position.copy(pose.position);
      controls.target.copy(pose.target);
      controls.maxDistance = clientWidth < 720 ? 88 : 72;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, clientWidth < 720 ? 1.5 : 2));
      renderer.setSize(clientWidth, clientHeight);
      controls.update();
    });
    resizeObserver.observe(host);

    let frameId = 0;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      pmremGenerator.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  const resetView = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    viewRef.current = 'perspective';
    const host = hostRef.current;
    const pose = getCameraPose(host.clientWidth, host.clientHeight, 'perspective');
    camera.position.copy(pose.position);
    camera.fov = pose.fov;
    camera.updateProjectionMatrix();
    controls.target.copy(pose.target);
    controls.update();
  };

  const topView = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    viewRef.current = 'top';
    const host = hostRef.current;
    const pose = getCameraPose(host.clientWidth, host.clientHeight, 'top');
    camera.position.copy(pose.position);
    camera.fov = pose.fov;
    camera.updateProjectionMatrix();
    controls.target.copy(pose.target);
    controls.update();
  };

  return (
    <main className="app">
      <div ref={hostRef} className="viewport" />
      <section className="hud" aria-label="Project title">
        <h1>Vyas Ji Gumanivala 3D Model</h1>
        <p>Orbit, pan, and zoom through the furnished floor plan.</p>
      </section>
      <div className="toolbar" aria-label="Camera controls">
        <button type="button" onClick={resetView} title="Perspective view">
          3D
        </button>
        <button type="button" onClick={topView} title="Top plan view">
          TOP
        </button>
      </div>
    </main>
  );
}
