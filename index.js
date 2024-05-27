// IIFE => immediatelt invoked function expression
const counterModule = (function () {
  let counter = 0;
  function counterLog() {
    console.log(`current counter value is:: ${counter}`); // this function will access inside the function only
  }
  return {
    increment: function () {
      counter++;
      counterLog();
    },
    decrement: function () {
      counter--;
      counterLog();
    },
    reset: function () {
      counter = 0;
      counterLog();
    },
  };
})(); // (--code--)() called immediate invoked function expression
counterModule.increment();
counterModule.increment();
counterModule.decrement();

// Function Statement (function Decleration) VS Function Expression

// Function Statement => Hoistiong accept, must be name
console.log(add(1, 2)); // caled hoistion function called top of the scope
function add(a, b) {
  return a + b;
}

// Function Expression => Hoisting not acceptt, anonymus
const square = function (a) {
  return a * a;
};
console.log(square(5));

// Event Looping

console.log("Start");

setTimeout(function () {
  console.log("Timeout Callback executed");
}, 0);

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button Clicked");
});

console.log("End");

// call, Apply , bind

// call this method allows you to call a function with specific 'this' value & individual passing arguments
// call function this a borrow function this method belongs to Function protoypes which means it is availabe on every function
const printFullName = function (hometown) {
  console.log(this.fname + " " + this.lname + " from - " + hometown); // basically this referes to an object it changes based on context or scope where it calls
};
let details1 = {
  fname: "Nagarjuna",
  lname: "Prasad",
};

printFullName.call(details1, "Nellore"); //first parameter refers to this
let details2 = {
  fname: "Yasaswani",
  lname: "Sai Sireesha",
};

// Call is like a function borrowing method
printFullName.call(details2, "Kovur");

// Apply method is similar to call method both are use to invoke function with specific this context but apply allows or accepts array as a parameter rather than individually

printFullName.apply(details2, ["Kovur"]);

//ex::

function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.apply(this, [name]);
  this.age = age;
}

const child = new Child("Naga", 25);

console.log(child);

//binds creates a new function that can be called a later it doesnt immediate invoke functionbut rathers returns a new function

let data = printFullName.bind(details1, "mysore");

console.log(data); // print function
data(); //retrun value

// Ex: Counter to implementing

let counter = {
  count: 0,
  increment: function () {
    console.log(this.count++);
  },
};
// this referes to an object
// this refers window object in global context

// loosing actual context placed where calling that.

document.querySelector(".btn").addEventListener("click", counter.increment);

function submit(name) {
  console.log("Submitted by :", name);
}
const userComponent = {
  callFunc: function () {
    this.submit();
  },
};
// userComponent.callFunc();  Uncaught TypeError: this.submit is not a function

let result1 = submit.bind(userComponent, "bind");
result1();

function Box(length, breadth) {
  this.length = length;
  this.breadth = breadth;
}
function Rectangle(l, b, c) {
Box.call(this, l, b); // max cases call() method will use inheritance concept
this.color = c;
}

let rectangle = new Rectangle(100, 400, 'blue');
console.log(rectangle)

//apply it is a method in javascript it immediate invoke function doent create new function it is similar to call which means this contect refers but apply methods acctrs first  param as this and aftet takes array as an param.

console.log(Math.max(1,2,3,4,5)); // but max method doesnt accept array we using apply to get max

console.log(Math.max.apply(null, [1,2,3,4,5,6]))



