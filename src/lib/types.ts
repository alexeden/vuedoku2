export interface Coordinates {
  row: number;
  col: number;
  index: number;
  nonet: number;
}

export type Cell = Coordinates & {
  locked: boolean;
  value: number;
}

export interface VuedokuState {
  cursor: Coordinates;
}
