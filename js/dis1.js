//배열 destruct assingment > 순서대로 할당

var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]


// 객체 배열 할당 > 동일한 키 값으로 할당
var {p, q} = {p: 42, q: 50};

console.log(p); // 42
console.log(q); // 50