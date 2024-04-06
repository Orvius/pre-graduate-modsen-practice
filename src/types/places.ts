export interface Point {
  lon: number;
  lat: number;
}

export interface Places {
  name: string;
  xid: string,
  kind: string,
  point: Point;
}
