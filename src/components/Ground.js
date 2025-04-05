import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Ground(rowIndex, depth) {
  let groundColor = "rgb(116, 204, 244)";
  switch (depth) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      groundColor = "rgb(90, 188, 216)";
      break;
    case 3:
      groundColor = "rgb(90, 188, 216)";
      break;
    case 4:
      groundColor = "rgb(28, 163, 236)";
      break;
    case 5:
      groundColor = "rgb(28, 163, 236)";
      break;
    case 6:
      groundColor = "rgb(25, 137, 218)";
      break;
    case 7:
      groundColor = "rgb(25, 137, 218)";
      break;
    case 8:
      groundColor = "rgb(15, 94, 156)";
      break;
    case 9:
      groundColor = "rgb(15, 94, 156)";
      break;
    case 10:
      groundColor = "rgb(4, 55, 94)";
      break;
    case 11:
      groundColor = "rgb(4, 55, 94)";
      break;
  }

  const ground = new THREE.Group();
  ground.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: groundColor })
  );

  foundation.position.z = 1.5;
  foundation.receiveShadow = true;
  ground.add(foundation);

  return ground;
}
/*
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
}*/
