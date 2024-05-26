import dayjs from 'dayjs';

/**
 * 时间处理，使用 dayjs 库
 */

const formatString = 'YYYY-MM-DD HH:mm:ss';

export const getFormatData = (time?: string | number | Date, format = formatString) => {
  return dayjs(time).format(format);
};
