function first(){
  console.log(1);
}
function second(){
  console.log(2);
}
first();
second();

function third(callback){
  // Как будто бы запрос к API
  setTimeout( function(){
  console.log(3);
    callback();
  }, 500 );
}

function forth(){
  console.log(4);
}
third(first);
forth();
