/* eslint-disable max-len */
/* jshint esversion: 6 */
/**
 *
 *
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
  constructor() {
  }

  /**
   * @param {number} numbers for summ
   * @return {number} summ of provided numbers
   * @memberof Calculator
   */
  add(...numbers) {
    const alowedTypeOfVariable = 'number';
    if (numbers.some((number) => typeof number !== alowedTypeOfVariable)) {
      throw new Error('One of the provided value is not in the list of allowed data types');
    } else {
      return numbers.reduce((previous, current) => previous + current);
    }
  }

  /**
   * @param {number} numbers for multiplication
   * @return {number} multiplication of provided numbers
   * @memberof Calculator
   */
  multiply(...numbers) {
    const alowedTypeOfVariable = 'number';
    if (numbers.some((number) => typeof number !== alowedTypeOfVariable)) {
      throw new Error(`One of the provided value is not in the list of allowed data types`);
    } else {
      return numbers.reduce((previous, current) => previous * current);
    }
  }
}

module.exports = Calculator;
