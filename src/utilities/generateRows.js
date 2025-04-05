import * as THREE from "three";
import { minTileIndex, maxTileIndex } from "../constants";
import { position } from "../components/Player";

export function generateRows(amount) {
  const rows = [];
  for (let i = 0; i <= amount; i++) {
    const rowData = generateForesMetadata(i);
    rows.push(rowData);
  }
  return rows;
}

function generateForesMetadata(row) {
  const occupiedTiles = new Set();
  const rocks = Array.from({ length: Math.round(Math.random() * 2) }, () => {
    let tileIndex;
    do {
      tileIndex = THREE.MathUtils.randInt(minTileIndex + 1, maxTileIndex - 1);
    } while (
      occupiedTiles.has(tileIndex) ||
      (tileIndex === position.currentTile && row === position.currentRow) // ensures that rocks don't spawn on the character
    );
    console.log(tileIndex + " " + position.currentTile);
    occupiedTiles.add(tileIndex);

    return { tileIndex };
  });

  return { rocks };
}
