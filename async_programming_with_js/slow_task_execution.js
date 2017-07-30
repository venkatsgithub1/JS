let slowTask=()=>{
  console.log('slow task');
  let now=new Date().getTime();
  while(new Date().getTime()<now+2000) {
    // some processing.
  }
};

let fastTask=()=>{
  console.log('fast task');
};

fastTask();
slowTask();
fastTask();
fastTask();
fastTask();

// fastTask function below slowTask has to wait 2 seconds for the slowTask to fully execute in order
// to have the call stack empty.
