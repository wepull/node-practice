let nums = [1, 2, 3, 4];

// Array.map((num, i, arr) => {})
Array.prototype.myMap = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(callback(this[i], i, this));
  }
  return tempArr;
};

// Array.filter((num, i, arr) => {})
Array.prototype.myFilter = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) tempArr.push(this[i]);
  }
  return tempArr;
};

// Array.reduce((acc, curr, i, arr) => {}, initialValue)
Array.prototype.myReduce = function (callback, initialValue) {
  let temp = initialValue;
  for (let i = 0; i < this.length; i++) {
    temp = temp ? callback(temp, this[i], i, this) : this[i];
  }
  return temp;
};

let mapResult = nums.myMap((num) => num * 3);
let filterResult = nums.myFilter((num) => num > 2);
let reduceResult = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});
// let reduceResult = nums.myReduce((num) => num > 2);

console.log(reduceResult);
