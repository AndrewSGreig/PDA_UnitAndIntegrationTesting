const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('it should update the running total when number button is pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('it should be able to add numbers together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.id('operator_add')).click();
    element(by.css('#number2')).click();
    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('it should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.id('operator_add')).click();
    element(by.css('#number2')).click();
    element(by.id('operator_add')).click();
    element(by.css('#number2')).click();
    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('it should output for a range of numbers', function(){
    element(by.css('#number2')).click();
    element(by.id('operator_subtract')).click();
    element(by.css('#number3')).click();

    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('-1')

    element(by.id('operator_add')).click();
    element(by.css('#number6')).click();
    element(by.id('operator_divide')).click();
    element(by.css('#number4')).click();

    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('1.25')

    element(by.id('operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();

    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('125000');
  })

  it('it should not allow user to divide by zero', function (){
    element(by.css('#number2')).click();
    element(by.id('operator_divide')).click();
    element(by.css('#number0')).click();

    element(by.id('operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal("MATHS ERROR! Not possible to divide by zero");

  })

});
