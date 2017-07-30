// Runs asyncSlowTask on a separate thread.
let slowTask=()=>{
  console.log('slow task');
};

let asyncSlowTask=()=>{
  setTimeout(slowTask,2000);
};

let fastTask=()=>{
  console.log('fast task');
};

fastTask();
asyncSlowTask();
fastTask();
fastTask();

// fastTask need not wait for 2 seconds since asyncSlowTask executes on a separate thread than normal thread.
