interface NumObj {
  [K: number]: any;
}

interface TreeArray {
  name: string;
  id: number;
  pid: number;
}

interface TreeData {
  name: string;
  id: number;
  pid: number;
  children?: TreeArray[];
}
