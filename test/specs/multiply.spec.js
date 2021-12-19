/* eslint-disable max-len */
/* jshint esversion: 6 */

const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`positive tests for multiplication`, () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it(`should return multiplication of positive integer numbers`, () => {
    expect(calc.multiply(4, 3, 6)).to.be.equal(4*3*6);
  });

  it(`should return multiplication of negative integer numbers`, () => {
    expect(calc.multiply(-5, -5, -10, -100)).to.be.equal(-5 * -5 * -10 * -100);
  });

  it(`should return multiplication of positive decimal numbers`, () => {
    expect(calc.multiply(5.2, 5.5, 10.00, 11.1111)).to.be.equal(5.2 * 5.5 * 10.00 * 11.1111);
  });

  it(`should return multiplication of negative decimal numbers`, () => {
    expect(calc.multiply(-50.2, -51.5, -0.11)).to.be.equal(-50.2 * -51.5 * -0.11);
  });

  it(`should return multiplication of negative and positive numbers`, () => {
    expect(calc.multiply(-50.2, -51.5, 50.2, 100.5, 2000, 0, 0.000))
        .to.be.equal(0);
  });
});

describe(`negative tests for multiplication`, () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it(`should return error if one of the provided parameter is string`, () => {
    const callWithErr = () => calc.multiply(4, '36');
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`should return error if one of the provided parameter is object`, () => {
    const callWithErr = () => calc.multiply(4, {a: 6, b: 7});
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`should return error if one of the provided parameter is array`, () => {
    const callWithErr = () => calc.multiply(4, [6, 7, 8]);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`should return error if one of the provided parameter is NULL`, () => {
    const callWithErr = () => calc.multiply(4, null);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`should return error if one of the provided parameter is boolean`, () => {
    const callWithErr = () => calc.multiply(4, true, false);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`should return error if one of the provided parameter is undefined`, () => {
    const callWithErr = () => calc.multiply(4, undefined);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });
});
