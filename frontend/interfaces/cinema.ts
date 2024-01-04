export interface CinemaList {
  id: number;
  name: string;
}

export interface CinemaDetail {
  id: number;
  name: string;
  seats_row: {
    id: number;
    row: string;
    max_column: number;
  }[];
}