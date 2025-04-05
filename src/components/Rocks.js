import * as THREE from "three";
import { tileSize } from "../constants";

export function Rock(tileIndex) {
  const rock = new THREE.Group();
  rock.position.x = tileIndex * tileSize;

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 15),
    new THREE.MeshLambertMaterial({
      color: 0x4d2926,
      flatShading: true,
    })
  );
  base.position.z = 10;
  base.castShadow = true;
  base.receiveShadow = true;
  rock.add(base);

  const tip = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    new THREE.MeshLambertMaterial({
      color: 0x4d2926,
      flatShading: true,
    })
  );
  tip.position.z = 15;
  tip.castShadow = true;
  tip.receiveShadow = true;
  rock.add(tip);

  return rock;
}
