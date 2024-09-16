/**
 * Generalized spell number function
 * @param input - any integer or floating point number
 * @return spelling in Azerbaijani
 */
export function spellNumberInAz(input: number): string;

/**
 * Returns number with ordinal suffix in Azerbaijani
 * @param number - the number to be converted
 * @param type - 'long' or 'short'
 * @return number with ordinal suffix
 * @example
 * getNumberWithSuffix(1); // returns "1-ci"
 * getNumberWithSuffix(1, 'long'); // returns "birinci"
 */
export function getNumberWithSuffix(number: number, type?: 'long' | 'short'): string;
