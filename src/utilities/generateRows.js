import * as THREE from "three";
import { minTileIndex, maxTileIndex } from "../constants";

export function generateRows(amount) {
  const rows = [];
  for (let i = 0; i < amount; i++) {
    const rowData = generateRow();
    rows.push(rowData);
  }
  return rows;
}

//useless function right now, useful if we want to generate other rows
function generateRow() {
  const type = randomElement(["forest", "forest"]);
  if (type === "forest") return generateForesMetadata();
  return generateForesMetadata();
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateForesMetadata() {
  const occupiedTiles = new Set();
  const rocks = Array.from({ length: 2 }, () => {
    let tileIndex;
    do {
      tileIndex = THREE.MathUtils.randInt(minTileIndex + 1, maxTileIndex - 1);
    } while (occupiedTiles.has(tileIndex));
    occupiedTiles.add(tileIndex);

    const height = randomElement([20, 45, 60]); //height doesn't do anything anymore

    return { tileIndex, height };
  });

  return { type: "forest", rocks };
}
