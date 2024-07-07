const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
let result = array.map(item => item.age)
console.log(result)
