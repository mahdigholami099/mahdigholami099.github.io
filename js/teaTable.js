import { scene } from "./scene.js";
import { loadingManager } from "./load.js";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader(loadingManager);

loader.load("../models/teaTable.glb", function (gltf) {
  const model = gltf.scene;
  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  scene.add(model);
});

loader.load("../models/tableLamp.glb", function (gltf) {
  const model = gltf.scene;
  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  scene.add(model);

  const color = new THREE.Color(1, 1, 1);

  model.getObjectByName("Object_7").material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 1,
  });
  model.getObjectByName("Object_8").material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 1,
  });

  const pLightTable = new THREE.PointLight(
    new THREE.Color(1, 1, 1),
    0.08,
    2
  );
  pLightTable.position.set(9.077, 1.3, 1.936);
  scene.add(pLightTable);
});

loader.load("../models/cactus.glb", function (gltf) {
  const model = gltf.scene;
  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  scene.add(model);
});

loader.load("../models/remote.glb", function (gltf) {
  const model = gltf.scene;
  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  scene.add(model);
});
