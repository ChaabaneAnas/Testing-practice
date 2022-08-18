class Calculator {

static add = (num1, num2) => num1 + num2;
static mult = (num1, num2) => num1 * num2;
static sub = (num1,num2) => num1 - num2;
static div = (num1,num2) =>{
  if(num1 % num2 !== 0){
    return undefined
  }
  return  num1 / num2;
} ;
}

module.exports = Calculator;