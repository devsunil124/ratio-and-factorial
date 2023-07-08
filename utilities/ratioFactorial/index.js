const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorail = (num1,num2,num3) => {
    ratio = ratioOfTwoNumbers(num1,num2);
    factorial = factorialOfNumber(num3);

    return {ratio, factorial};
}

module.exports = ratioAndFactorail;