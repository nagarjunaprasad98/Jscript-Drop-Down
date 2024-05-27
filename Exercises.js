console.log("Exercises 1:: 50 Questions");
// Find Duplicates in a given array?

// Write a function to find the sum of all elements in an array.

const arr = [2, 3, 4, 5, 6, 120, 3, 4];

let sumOfArray = arr.reduce((acc, val) => acc + val, 0);

let sum = 0;
arr.map((val) => (sum = sum + val));

console.log("Q1:: ", sumOfArray, sum);
// Write a function to find the maximum element in an array.

function MaxElement(arr) {
  let value = arr[0]; // initilize firat elemnt of an array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) value = arr[i]; // update current value is greter
  }
  return value;
}

let result = Math.max.apply(null, arr);
console.log("Q2:: ", result, MaxElement(arr));

// Write a function to reverse an array.

function reverseArray(arr) {
  let value = [];
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    value[j] = arr[i];
  }
  return value;
}
let reverseArrayMap = arr.map((val, index, arr) => arr[arr.length - 1 - index]);
console.log("reverse Array", reverseArray(arr), reverseArrayMap);
// console.log('Q3:: ', reverseArray(arr));

// Write a function to remove duplicates from an array.

function removeDup(arr) {
  let value = [];
  for (let i = 0; i < arr.length; i++) {
    if (!value.includes(arr[i])) {
      value.push(arr[i]);
    }
  }
  return value;
}
let removeDuplicates = arr.filter((val, idx, arr) => arr.indexOf(val) === idx);
console.log("remove Duplicates ", removeDuplicates, removeDup(arr));

// Write a function to rotate an array by k steps.

function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log('Rotae Array "K" times ', rotateArray(arr, 4));

// Write a function to find the intersection of two arrays.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let intersectionOfTwoArray = arr1.filter((value) => arr2.includes(value));

function intersection(arr1, arr2) {
  let value = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        value.push(arr1[i]);
      }
    }
  }
  return value;
}

// Finding the elements that are present in both arrays

console.log(
  "Intersection of Two Arrays",
  intersectionOfTwoArray,
  intersection(arr1, arr2)
);

// Write a function to merge two sorted arrays.

function mergerdArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
    break;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  return arr1;
}
console.log("mergerd Two sorted Arrays ", mergerdArray(arr1, arr2));
// Write a function to find the union of two arrays.
// Write a function to check if an array is a subset of another array.
// Write a function to find the second largest element in an array.
// Write a function to find the elements that appear only once in an array.
// Write a function to move all zeros to the end of an array.
// Write a function to sort an array in ascending order.
// Write a function to sort an array in descending order.
// Write a function to find the longest consecutive sequence in an array.
// Write a function to find the common elements in three arrays.
// Write a function to find the missing number in a given array of 1 to n.
// Write a function to find the duplicate number in an array of n+1 elements.
// Write a function to find the majority element in an array.
// Write a function to find the maximum product of two integers in an array.
// Write a function to find the kth smallest element in an array.
// Write a function to find the kth largest element in an array.
// Write a function to find the maximum sum of a subarray.
// Write a function to find the minimum sum of a subarray.
// Write a function to implement a binary search on a sorted array.
// Write a function to merge intervals in an array.
// Write a function to find the pairs in an array whose sum is equal to a given target.
// Write a function to find the triplet in an array whose sum is equal to a given target.
// Write a function to find the equilibrium index of an array.
// Write a function to check if an array is sorted in ascending order.
// Write a function to rearrange the array such that positive and negative numbers alternate.
// Write a function to find the largest sum contiguous subarray (Kadane's algorithm).
// Write a function to segregate even and odd numbers in an array.
// Write a function to find the first missing positive integer.
// Write a function to count the number of inversions in an array.
// Write a function to find the maximum difference between two elements such that larger element appears after the smaller element.
// Write a function to cyclically rotate an array by one.
// Write a function to find the maximum length of equal number of 0s and 1s in a binary array.
// Write a function to find the number of occurrences of a given element in a sorted array.
// Write a function to find the maximum circular subarray sum.
// Write a function to check if there are two elements in an array whose sum is equal to a given number.
// Write a function to convert an array into Zig-Zag fashion.
// Write a function to find the smallest and second smallest elements in an array.
// Write a function to count all distinct pairs with a given difference.
// Write a function to rearrange an array in maximum minimum form.
// Write a function to find the smallest positive integer value that cannot be represented as the sum of any subset of a given array.
// Write a function to find all subarrays with a sum equal to zero.
// Write a function to find the minimum number of platforms required for a railway station.
// Write a function to find the smallest subarray with a sum greater than a given value.
// Write a function to find the longest subarray with a sum equal to a given value.

let array = [1, 2, 3, 4, 1, 2, 34, 5, 6, 7, 8];
let duplicates = array.filter((val, index, arr) => arr.indexOf(val) !== index); // this called finding duplicates
console.log(duplicates);
