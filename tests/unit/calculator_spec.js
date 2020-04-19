var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('it can do additions', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.equal(5, actual);
  })


  it('it can do subtractions', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.equal(3, actual);
  })


  it('it can do multiplications', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    actual = calculator.runningTotal;
    assert.equal(15, actual);
  })


  it('it can do divisions', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.equal(3, actual);
  })

  it('it can calculate numberClick', function(){
    calculator.runningTotal = 0;
    calculator.newTotal = true;
    calculator.numberClick(2);
    assert.equal("2", calculator.runningTotal);

    calculator.runningTotal = 1;
    calculator.newTotal = true;
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);

    calculator.runningTotal = 0;
    calculator.newTotal = false;
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);

    calculator.runningTotal = 1;
    calculator.newTotal = true;
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);
  })


  it('it can concatenate multiple numbers', function(){
    calculator.runningTotal = 1;
    calculator.newTotal = true;
    calculator.numberClick(1);
    calculator.numberClick(2);
    assert.equal(12, calculator.runningTotal)
  })


  it('it can use the previous operator to determine current operation, add, subtract, multiply, divide', function(){
    calculator.previousTotal = 1;
    calculator.runningTotal = 2;
    calculator.previousOperator = '+';
    calculator.operatorClick('-');
    assert.equal(3, calculator.runningTotal)

    calculator.previousTotal = 2;
    calculator.runningTotal = 1;
    calculator.previousOperator = '-';
    calculator.operatorClick('+');
    assert.equal(1, calculator.runningTotal)

    calculator.previousTotal = 2;
    calculator.runningTotal = 2;
    calculator.previousOperator = '*';
    calculator.operatorClick('-');
    assert.equal(4, calculator.runningTotal)

    calculator.previousTotal = 6;
    calculator.runningTotal = 2;
    calculator.previousOperator = '/';
    calculator.operatorClick('-');
    assert.equal(3, calculator.runningTotal)
  })


  it('it can clear the previous operator when equals is clicked', function(){
    calculator.previousTotal = 4;
    calculator.runningTotal = 2;
    calculator.previousOperator = '=';
    calculator.operatorClick('+');
    assert.equal(null, this.previousOperator);
  })


  it('it can deal with clear button', function(){
    calculator.runningTotal = 0;
    calculator.previousOperator = '+';
    calculator.previousTotal = 2;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal(null, calculator.previousOperator);
    assert.equal(null, calculator.previousTotal);

    calculator.runningTotal = 2;
    calculator.previousOperator = '+';
    calculator.previousTotal = 2;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal('+', calculator.previousOperator);
    assert.equal(2, calculator.previousTotal);
  })



});
