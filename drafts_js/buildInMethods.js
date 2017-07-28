console.log("Hello, World".toUpperCase());



const logg = (health1, health2, message) =>
 ({
   health1,
   health2,
   message: x => x + x
 });

const stat = logg(1,2,'test');
console.log(stat);
console.log(stat.health1);
console.log(stat.health2);


if (typeof stat.message === "function") {
    console.log(stat.message(10));
}


//console.log(stat.message(10));


