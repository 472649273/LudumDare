import * as THREE from "three";
import { generateRows } from "../utilities/generateRows";
import { maxRowIndex } from "../constants";
import { Ground } from "./Ground";
import { Rock } from "./Rocks";

export const metadata = [];

export const map = new THREE.Group();

export function initializeMap(depth) {
  addRows(depth);
}

export function addRows(depth) {
  map.clear();
  metadata.length = 0;
  const newMetadata = generateRows(maxRowIndex);

  metadata.push(...newMetadata);
  metadata.forEach((rowData, index) => {
    const rowIndex = index;

    const row = Ground(rowIndex, depth);

    rowData.rocks.forEach(({ tileIndex }) => {
      const rock = Rock(tileIndex);
      row.add(rock);
    });

    map.add(row);
  });
}
