export interface NumObj {
  [K: number]: any;
}

export interface TreeArray {
  name: string;
  id: number;
  pid: number;
}

export interface TreeData {
  name: string;
  id: number;
  pid: number;
  children?: TreeArray[];
}
