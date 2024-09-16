/*eslint-disable*/
import { isInteger, isIntersecting, getOrdinalSuffix } from '../../src/utils/helpers';

describe('isInteger function', function() {
  it('correctly defines if number is integer or not', function() {
    expect(isInteger(12)).toEqual(true);
    expect(isInteger(1.5)).toEqual(false);
    expect(isInteger(Math.PI)).toEqual(false);
    expect(isInteger(886 * 1234)).toEqual(true);
  });
});

describe('isIntersecting', () => {
  test('should return true for strings with common elements', () => {
    expect(isIntersecting('abc', 'bcd')).toBe(true);
    expect(isIntersecting('hello', 'world')).toBe(true);
  });

  test('should return false for strings with no common elements', () => {
    expect(isIntersecting('abc', 'def')).toBe(false);
    expect(isIntersecting('hello', 'xyz')).toBe(false);
  });
});

describe('getOrdinalSuffix', () => {
  test('should return "üncü" for numbers ending with ü or ö', () => {
    expect(getOrdinalSuffix('üç')).toBe('üncü');
    expect(getOrdinalSuffix('dörd')).toBe('üncü');
  });

  test('should return "uncu" for numbers ending with o or u', () => {
    expect(getOrdinalSuffix('doqquz')).toBe('uncu');
    expect(getOrdinalSuffix('on')).toBe('uncu');
  });

  test('should return "ncı" or "ıncı" for numbers ending with a or ı', () => {
    expect(getOrdinalSuffix('altı')).toBe('ncı');
    expect(getOrdinalSuffix('qırx')).toBe('ıncı');
  });

  test('should return "nci" or "inci" for other numbers', () => {
    expect(getOrdinalSuffix('bir')).toBe('inci');
    expect(getOrdinalSuffix('iki')).toBe('nci');
  });
});
