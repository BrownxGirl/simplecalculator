
function add(x,y){
let sum = x+y;
return sum;
}

function addMultiple(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}


function multiply(x,y){
    let multiply = x * y;
    return multiply;
}

function multiplyAlot(...args){
    let multiply = 1;
    for(let i = 0; i < args.length; i++){
       multiply *= args[i];
    }
    return multiply;
}


module.exports = {
  add,
  addMultiple,
  multiply,
  multiplyAlot
  
}
