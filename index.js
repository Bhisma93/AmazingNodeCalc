// console.log('Poopdi Scoop! POOOOOOP!')

// const add = (num1, num2) => {
//     return num1 + num2;
// };
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const squ = (num1) => num1 * num1;
const roo = (num1) => Math.sqrt(num1);

const arithmetic = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    squ: squ,
    roo: roo
};

module.exports = arithmetic;

