// let array = [1,2,3,4,5];
// function reverseArray(array) {
//     return array.reverse()
// } 
// console.log(reverseArray(array));
// let array_ = [1,2,3,4,5,6,7];
// function reverseArray(_array) {
//     return _array.reverse()
// } 
// console.log(reverseArray(array_));
// function isInRange(num) {
//     return num >= 50 && num <= 99;
//   }
  
//   function checkRange(num1, num2) {
//     return isInRange(num1) || isInRange(num2);
//   }
//   console.log(checkRange(55, 45));
//   console.log(checkRange(25, 60));
//   console.log(checkRange(30, 40)); 
//  console.log(checkRange(100, 105)); 
// function getMinValue(arr, mapFunc) {
//     if (arr.length === 0) return undefined;
//     return arr.map(mapFunc).reduce((min, val) => (val < min ? val : min), Infinity);
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   const mapFunc = (x) => x * 2;
  
//   console.log(getMinValue(arr, mapFunc)); 
// let name = "Eshal";
// let namee = name.slice(2,5);
// console.log(namee);
// function getAngleType(angle) {
//     if (angle > 0 && angle < 90) {
//       return 'Acute angle';
//     } else if (angle === 90) {
//       return 'Right angle';
//     } else if (angle > 90 && angle < 180) {
//       return 'Obtuse angle';
//     } else if (angle === 180) {
//       return 'Straight angle';
//     } else {
//       return 'Invalid angle';
//     }
//   }
//   console.log(getAngleType(45));
//   console.log(getAngleType(90));
//   console.log(getAngleType(135));
//   console.log(getAngleType(200)); 
//   console.log(getAngleType(180));
// function nextRoundNumber(num) {
//     return Math.ceil(num / 10) * 10;
//   }
//   console.log(nextRoundNumber(592)); 
//   console.log(nextRoundNumber(590)); 
//   console.log(nextRoundNumber(585)); 
//   console.log(nextRoundNumber(600)); 
//   console.log(nextRoundNumber(601)); 
// function findIndex(arr, target) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i;
//       }
//     }
//     return -1; 
//   }
//   const arr = [10, 20, 30, 40, 50];
//   console.log(findIndex(arr, 30)); 
//   console.log(findIndex(arr, 60)); 
  