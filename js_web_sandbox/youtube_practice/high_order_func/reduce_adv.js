
const fs = require('fs-extra');

var output = fs.readFileSync('data.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))
    .reduce((customers, line)=>{
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
    });
        return customers;
    }, {});

console.log('output', JSON.stringify(output, null, 2));
/*
fs.copy('/tmp/myfile', '/tmp/mynewfile', function(err){
  if (err) return console.error(err);

  console.log("success!")
}); //copies file
*/
