"use strict";
const findInArray = (arrayData, searchValue, objectName) => {
  let findValue = arrayData.find((data) => {
    return objectName ? data[objectName] === searchValue : data === searchValue;
  });
  return findValue;
};

// console.log(findInArray([1, 2, 3, 4, 5], 1));
// console.log(
//   findInArray(
//     [
//       { name: "akash", age: 25 },
//       { name: "ravi", age: 28, liveIn: { city: "delhi" } },
//       { name: "rajan", age: 25 },
//     ],
//     25,
//     "age"
//   )
// );
module.exports = findInArray;
