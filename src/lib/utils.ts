import { Coordinates, Cell } from './types';

export class Utils {
  static createCells(values: number[]): Cell[] {
    return values.map((value, index) => ({
      index,
      value,
      locked: value > 0,
      ...Utils.coordsFromIndex(index),
    }));
  }

  static coordsFromIndex(index = 0): Coordinates {
    const col = index % 9;
    const row = Math.floor(index / 9);

    return {
      row,
      col,
      index,
      nonet: (col - (col % 3)) / 3 + (row - (row % 3)),
    };
  }

  static coordsFromRowCol({ row = 0, col = 0 }): Coordinates {
    row = (row + 9) % 9;
    col = (col + 9) % 9;

    return {
      row,
      col,
      index: row * 9 + col,
      nonet: (col - (col % 3)) / 3 + (row - (row % 3)),
    };
  }
}
