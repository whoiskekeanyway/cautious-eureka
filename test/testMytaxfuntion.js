const TAXCalculator = require('../myTaxfunction');

const chai = require('chai');
const expect = chai.expect;

describe('#calculate incomeTax', function() {
    it('calculate tax correctly', function() {
        let income = 200000;
        let expectedtax = '5000';
        let tax = TAXCalculator.calcIncomeTax(income * 0.26)
        expect(tax).not.equal(expectedtax);
    });
});
 