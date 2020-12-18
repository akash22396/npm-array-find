# Installation:

```
npm i array-find
```

# How to use ?

```
const findInArray = require('array-find');
or
import findInArray from 'array-find';

// With object name findInArray(arrayData,searchValue,objectName)

findInArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28 },
      { name: "rajan", age: 25 },
    ],
    28,
    "age"
);

// Without object name findInArray(arrayData,searchValue)

findInArray([1, 2, 3, 4, 5], 1);
```

# Array filter 
 for array filter visit: https://www.npmjs.com/package/npm-array-filter
