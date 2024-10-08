/**
 * MIT License

Copyright (c) 2018 Orkhan Huseynli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import spellInteger from './spelling/integer';
import spellFloat from './spelling/float';
import { getOrdinalSuffix, isInteger, MAX_SAFE_VALUE } from './utils/helpers';

/**
 * Generalized spell number function
 * @param {input} number - any integer or floating point number
 * @return {string} spelling in Azerbaijani
 */
// eslint-disable-next-line import/prefer-default-export
export const spellNumberInAz = input => {
  if (typeof input !== 'number') {
    throw Error(
      'Üzr istəyirik! The value you passed is neither an integer nor a floating point number.'
    );
  }

  // it is Number.MAX_SAFE_INTEGER's value :) actually
  if (input > MAX_SAFE_VALUE) {
    throw Error(
      `Üzr istəyirik! We do not spell numbers above ${MAX_SAFE_VALUE}.`
    );
  }

  if (isInteger(input)) {
    return spellInteger(input);
  }

  return spellFloat(input);
};

/**
 * Returns number with ordinal suffix in Azerbaijani
 * @param {number} number
 * @param {'long' | 'short'} type - 'long' or 'short'
 * @return {string} number with ordinal suffix
 * @example
 * getNumberWithSuffix(1); // returns "1-ci"
 * getNumberWithSuffix(1, 'long'); // returns "birinci"
 */
export function getNumberWithSuffix(number, type = 'long') {
  const value = spellNumberInAz(number);
  let suffix = getOrdinalSuffix(value);

  switch (type) {
    case 'short': {
      suffix = suffix.slice(-2);
      return `${number}-${suffix}`;
    }
    default: {
      return `${value}${suffix}`;
    }
  }
}
