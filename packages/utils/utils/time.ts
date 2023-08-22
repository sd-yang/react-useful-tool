import dayjs from 'dayjs';

const standardTimeStr = 'YYYY-MM-DD HH:mm:ss';

export const getNowTime = () => dayjs().format(standardTimeStr);
