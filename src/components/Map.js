import * as THREE from "three";
import { generateRows } from "../utilities/generateRows";
import { maxRowIndex } from "../constants";
import { Ground, GroundEdge } from "./Ground";
import { Rock } from "./Rocks";

export const metadata = [
  {
    type: "forest",
    rocks: [
      { tileIndex: Math.round(Math.random() * 10) - 5, height: 50 },
      { tileIndex: Math.round(Math.random() * 10) - 5, height: 30 },
      { tileIndex: Math.round(Math.random() * 10) - 5, height: 50 },
    ],
  },
];

export const map = new THREE.Group();

export function initializeMap() {
  //Add the row behind the player at spawn

  const groundStart = GroundEdge(0);
  const groundEnd = GroundEdge(maxRowIndex + 2);
  map.add(groundStart);

  //generate random rows in-front
  addRows();
  map.add(groundEnd);
}

export function addRows() {
  const newMetadata = generateRows(maxRowIndex);

  metadata.push(...newMetadata);
  metadata.forEach((rowData, index) => {
    const rowIndex = index + 1;

    if (rowData.type === "forest") {
      const row = Ground(rowIndex);

      rowData.rocks.forEach(({ tileIndex, height }) => {
        const rock = Rock(tileIndex, height);
        row.add(rock);
      });

      map.add(row);
    }
  });
}
