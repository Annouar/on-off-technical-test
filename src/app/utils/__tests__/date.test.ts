import { getTwoDigitsTime, isToday, isYesterday } from '../date';

describe('date utils', () => {
  describe('getTwoDigitsTime', () => {
    it('should a two digit formatted string', () => {
      const number = 2;

      const formattedNumber = getTwoDigitsTime(number);

      expect(formattedNumber).toBe('02');
    });
  });

  describe('isToday', () => {
    it('should return true if date in parameter match today date', () => {
      const today = new Date();

      expect(isToday(today)).toBe(true);
    });
  });

  describe('isYesterday', () => {
    it('should return true if date in parameter match yesterday date', () => {
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      expect(isYesterday(yesterday)).toBe(true);
    });
  });
});
