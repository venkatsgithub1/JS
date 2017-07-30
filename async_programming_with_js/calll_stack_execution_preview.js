let funcA=()=> {
  funcB();
}

let funcB=()=> {
  // console.log(Error().stack);
  funcC();
}

let funcC=()=> {
  //console.log(Error().stack);
}

funcA();

// if console.log() in funcC is removed. call stack will have C > B > A in the order of execution.
// Here first funcA is called, in turn calls funcB, in turn calls funcC, hence the execution order is
// in the reverse order.
