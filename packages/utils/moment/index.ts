import dayjs from 'dayjs';

/**
 * 时间处理，使用 dayjs 库
 */

const formatString = 'YYYY-MM-DD HH:mm:ss';

// 获取时间格式化字符串
export const getFormatData = (
  time?: string | number | Date | null,
  format = formatString
) => {
  return dayjs(time).format(format);
};

// 获取指定的时间
export const getAddedTime = (
  time: string | number | Date | null,
  type: dayjs.ManipulateType,
  num: number,
  format = formatString
) => {
  return dayjs(time).add(num, type).format(format);
};

// 获取两个时间之间的间隔
export const getTimeDiff = (
  startTime: string | number | Date | null,
  endTime: string | number | Date | null,
  type: dayjs.ManipulateType,
  float = false,
) => {
  return dayjs(endTime).diff(dayjs(startTime), type, float);
};
