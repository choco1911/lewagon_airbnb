const a = 1;
const b = a && "header"
console.log(b); // header

const c = 0;
const e = c && "title";
console.log(e); // 0

const d = 0;
const f = d || "body";

console.log(f); // body
