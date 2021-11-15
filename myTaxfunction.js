module.exports = {
  calcIncomeTax: function (income) {
    let incomeTax = 0;
   
      // if the income is equal to or less than zero and lower than 195850
    if (income >= 0 && income <= 195850) {
      incomeTax = income * 0.18;
      // if the income is equal to or less than 195851 and lower than 305850
    } else if (income <= 305850) {
      incomeTax = 35253 + ((income - 195850) * 0.26);
       // if the income is equal to or less than 305851 and lower than 423300
    } else if (income <= 423300) {
      incomeTax = 63853 + ((income - 305850) * 0.31);
        // if the income is equal to or less than 423301 and lower than 555600
    } else if (income < 555600) {
      incomeTax = 100263 + ((income - 305850)* 0.36);
        // if the income is equal to or less than 555601 and lower than 708310
    } else if (ncome < 708310) {
      incomeTax = 147891 + ((income - 305850) * 0.39);
        // if the income is equal to or less than 708311 and lower than 1500000
    } else if (income < 1500000) {
      incomeTax = 207448 + ((income - 305850) * 0.41);
        // if the income is over 1500000
    } else  {
      incomeTax = 532041 + ((income - 305850)  * 0.45);
      //incomeTax.toFixed(2);
    }
    return incomeTax.toFixed(2);
  },
};
