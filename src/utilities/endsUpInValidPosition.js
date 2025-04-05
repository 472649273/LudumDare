import { calculateFinalPosition } from "./calculateFinalPosition";
import {
  minTileIndex,
  maxTileIndex,
  maxRowIndex,
  maxLayerDepth,
} from "../constants";
import { metadata as rows } from "../components/Map";

export function endsUpInValidPosition(currentPosition, moves) {
  // Calculate where the player would end up after the move
  const finalPosition = calculateFinalPosition(currentPosition, moves);

  // Detect if we hit the edge of the board
  if (
    finalPosition.rowIndex === -1 ||
    finalPosition.rowIndex === maxRowIndex + 1 ||
    finalPosition.tileIndex === minTileIndex - 1 ||
    finalPosition.tileIndex === maxTileIndex + 1
  ) {
    // Invalid move, ignore move command
    return false;
  }

  // Detect if we hit a rock
  const finalRow = rows[finalPosition.rowIndex];
  if (
    finalRow &&
    finalRow.rocks.some((rock) => rock.tileIndex === finalPosition.tileIndex)
  ) {
    // Invalid move, ignore move command
    return false;
  }

  //Detect if we are at max depth
  if (finalPosition.z === maxLayerDepth) {
    return false;
  }

  return true;
}
