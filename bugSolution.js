function foo(a,b){
  //Explicit type checking
  if(typeof a !== 'number' || typeof b !== 'number'){
    return "Error: Operands must be numbers";
  }
  return a+b;
}
console.log(foo(1, "2")); //Output: Error: Operands must be numbers
console.log(foo(1, 2)); //Output: 3

//Alternative solution using Number() for type conversion
function foo2(a,b){
  return Number(a) + Number(b);
}
console.log(foo2(1, "2")); //Output: 3
console.log(foo2(1, 2)); //Output: 3