const TAXCalculator = require('../myTaxfunction');

const chai = require('chai');
const expect = chai.expect;

describe('#calculate incomeTax', function() {
    it('calculate tax correctly', function() {
        let income = 195850;
        let incomeTax = "35253.00";
        let actual = TAXCalculator.calcIncomeTax(income)
        expect(incomeTax).to.equal(actual);
    });
});
