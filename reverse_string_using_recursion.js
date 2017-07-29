let str1='String';

let revStr=(str)=> {
  console.log(str);
  if (str==="") return str
  return revStr(str.substr(1))+str.charAt(0);
};

revStr(str1);
