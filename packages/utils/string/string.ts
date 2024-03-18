/**
 * 转化 areaInput 的值 返回为数组，或者自定义分隔符的字符串
 */

export const parseAreaValue = (
  areaInput?: string,
  splitType: 'array' | 'string' = 'array',
  splitStr = ','
) => {
  if (!areaInput) return splitType === 'array' ? [] : '';
  // 将字符串进行转换，处理逗号或者换行符，转化为标准数组
  const areaArray = areaInput.replace(/，|,|\n|;|；/g, ',').split(',');
  if (splitType === 'array') {
    return areaArray;
  } else {
    return areaArray.join(splitStr);
  }
};
