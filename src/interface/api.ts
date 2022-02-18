export interface Item {
  id: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ApiData {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: Item[];
  };
}
