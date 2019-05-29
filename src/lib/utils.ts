import { Coordinates } from './types';

export class Utils {
  static coordsFromIndex(index = 0): Coordinates {
    const col = index % 9;
    const row = (index - (index % 9)) % 9;

    return {
      row,
      col,
      index,
      nonet: (col - (col % 3)) / 3 + (row - (row % 3)),
    };
  }

  static coordsFromRowCol(row = 0, col = 0): Coordinates {
    return {
      row,
      col,
      index: row * 9 + col,
      nonet: (col - (col % 3)) / 3 + (row - (row % 3)),
    };
  }

  static chunkify<T>(size: number, list: T[]): T[][] {
    return list.length > 0
      ? [list.slice(0, size), ...Utils.chunkify(size, list.slice(size))]
      : [list];
  }
}
