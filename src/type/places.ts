export interface Point {
  lon: number;
  lat: number;
}

export interface Places {
  name: string;
  xid: string,
  kinds: string,
  point: Point;
}
