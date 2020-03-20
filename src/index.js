function eval() {
    // Do not use eval!!!
    return;
}

//Проверка на парность скобок
function bracketsCouple(str){
let all = ['-', '/', '+', '*'];
for(am = 0; am<all.length; am++){
if(str.includes(all[am])) {
  str = str.replace(/[0-9]/g, '');
  str = str.replace(all[am], '');
am=-1;}}
const br = [ '()' ];
for (let i = 0; i < br.length; i++) {
 if (str.includes(br[i])) {
   str = str.replace(br[i], "");
 i=-1;}}
for (let i = 0; i < br.length; i++) {
if(str.length !== 0) {throw new Error('ExpressionError: Brackets must be paired')}else{return true}}}


function exit(one){
  return new Function('return ' + one)();
}


//Деление на ноль и вывод всего
function expressionCalculator (expr) {
  expr = expr.split(' ').filter(el => el != '').join('');
let noZero = expr.trim().includes('/0');
if (noZero){throw new Error('TypeError: Division by zero.')}
if(bracketsCouple(expr))
  return exit(expr);
}


module.exports = {
    expressionCalculator
}
