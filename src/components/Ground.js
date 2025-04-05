import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Ground(rowIndex) {
  const ground = new THREE.Group();
  ground.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry((tilesPerRow - 2) * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: "rgb(193, 155, 107)" })
  );
  const foundationEdge = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 2),
    new THREE.MeshLambertMaterial({ color: "rgb(158, 109, 48)" })
  );
  foundation.position.z = 1.5;
  foundation.receiveShadow = true;
  foundationEdge.position.z = 1.5;
  foundationEdge.receiveShadow = true;
  ground.add(foundationEdge);
  ground.add(foundation);

  return ground;
}

export function GroundEdge(rowIndex) {
  const ground = new THREE.Group();
  ground.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 2),
    new THREE.MeshLambertMaterial({ color: "rgb(158, 109, 48)" })
  );
  foundation.position.z = 1.5;
  foundation.receiveShadow = true;
  ground.add(foundation);

  return ground;
}
