var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

printObj(library);

function printObj (arr) {
  arr.map (function (val) {
    console.log("*********************");
    for (var val2 in val) {
      console.log(val[val2]);
    }
    console.log("*********************");
  });
}
