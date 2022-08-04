let names = [
  { name: "Dimas", age: 30 },
  { name: "Natasha", age: 31 },
];

let diff_1 = names.filter((name) => {
  return name.age > 30;
});

let diff_2 = names.map((n) => {
  return n.age;
});

let diff_3 = [];
names.forEach((n) => diff_3.push(n.name));
////
console.log(diff_1);
console.log(diff_2);
console.log(diff_3);
/////////////////////////
const passEx = false;
const res = new Promise((resolve, reject) => {
  setTimeout(() => {
    passEx ? resolve("Success") : reject("Failed");
  }, 2000);
});

res
  .then((v) => {
    console.log(res);
    console.log(v);
  })
  .catch((v) => {
    console.log(res);
    console.log(v);
  });
