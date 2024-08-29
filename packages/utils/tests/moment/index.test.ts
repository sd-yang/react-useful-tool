import { getFormatData } from "../../moment";

// 时间格式化
describe('getFormatData', () => {
  const formatString = 'YYYY-MM-DD HH:mm:ss';

  it('should format the date correctly', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const result = getFormatData(date, formatString);
    expect(result).toBe('2022-01-01 08:00:00');
  });

  it('should use the default format if format parameter is not provided', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const result = getFormatData(date);
    expect(result).toBe('2022-01-01 08:00:00');
  });
});
