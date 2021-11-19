/* eslint-disable max-len */
/* jshint esversion: 6 */

const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`positive tests for addition`, () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it(`shoud return summ of positive integer numbers`, () => {
    expect(calc.add(4, 3, 6)).to.be.equal(13);
  });

  it(`shoud return summ of negative integer numbers`, () => {
    expect(calc.add(-5, -5, -10, -100)).to.be.equal(-120);
  });

  it(`shoud return summ of positive decimal numbers`, () => {
    expect(calc.add(5.2, 5.5, 10.00, 11.1111)).to.be.equal(31.8111);
  });

  it(`shoud return summ of negative decimal numbers`, () => {
    expect(calc.add(-50.2, -51.5, -0.11)).to.be.equal(-101.81);
  });

  it(`shoud return summ of negative and positive numbers`, () => {
    expect(calc.add(-50.2, -51.5, 50.2, 100.5, 2000, 0, 0.000))
        .to.be.equal(2049.000);
  });
});

describe(`negative tests for addition`, () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it(`shoud return error if one of the provided parameter is string`, () => {
    const callWithErr = () => calc.add(4, '36');
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`shoud return error if one of the provided parameter is object`, () => {
    const callWithErr = () => calc.add(4, {a: 6, b: 7});
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`shoud return error if one of the provided parameter is array`, () => {
    const callWithErr = () => calc.add(4, [6, 7, 8]);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`shoud return error if one of the provided parameter is NULL`, () => {
    const callWithErr = () => calc.add(4, null);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`shoud return error if one of the provided parameter is boolean`, () => {
    const callWithErr = () => calc.add(4, true, false);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });

  it(`shoud return error if one of the provided parameter is undefined`, () => {
    const callWithErr = () => calc.add(4, undefined);
    expect(callWithErr).to.throw(`One of the provided value is not in the list of allowed data types`);
  });
});
