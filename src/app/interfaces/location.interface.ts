export interface IGeometry {
  type?: string;
  coordinates?: number[];
}

export interface IGeoJson {
  type?: string;
  features?: any[];
  geometry?: IGeometry;
  bbox?: number[];
  properties?: ILocation;
}

export interface ILocation {
  city?: string;
  state?: string;
}
