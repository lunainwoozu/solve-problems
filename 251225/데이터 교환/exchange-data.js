let [a,b,c] = [5,6,7];
let [ra,rb,rc] = [a,b,c];

b = ra; // 5
c = rb; // 6
a = rc; // 7

console.log(a)
console.log(b)
console.log(c)