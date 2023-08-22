import { NumObj, TreeArray, TreeData } from '../types/tree';

/**
 * 操作树相关数据的方法
 */

export const arrayToTree = (data: TreeArray[]) => {
  const result: TreeData[] = [];
  const map: NumObj = {};
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    const parent = map[item.pid];
    if (parent) {
      if (!parent.children) parent.children = [];
      parent.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
};
