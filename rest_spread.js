// ///Spread Operator in Arrays
// const num = [1, 2, 3, 4];
// const newNum = [5, 6, 7, 8];
// const allNum = [...num, ...newNum, 9, 10, 11, 12];

// // console.log(num, newNum);
// console.log(allNum);

// ////Spread operator with objects
// const person = {
//   name: "Ranjith",
// };

// const newPerson = {
//   ...person,
//   age: 24,
// };

// console.log(newPerson);

/////////////Rest Operator
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
