
// =======================
// 🔹 SYMBOL + OBJECT
// =======================
const mySym = Symbol("mykey1");

const JSUser = {
    name: "Arko",
    age: 19,
    [mySym]: "send",
};

console.log("JSUser:", JSUser);

// =======================
// 🔹 BASIC FUNCTIONS
// =======================
function addTwoNos(number1, number2) {
    return number1 + number2;
}
console.log("Addition:", addTwoNos(5, 8)); // 13

function addTwoNo(no1, no2) {
    console.log("Sum (no return):", no1 + no2);
}
addTwoNo(3, 3); // 6

// =======================
// 🔹 RETURN VS UNDEFINED
// =======================
function loggedIn(username) {
    return `${username} just logged in`;
}

console.log(loggedIn("Arko"));
console.log(loggedIn()); // undefined just logged in

// =======================
// 🔹 REST OPERATOR
// =======================
function calculatePrice(val1, val2, ...num1) {
    return num1;
}

console.log("Rest values:", calculatePrice(200, 300, 400, 500));

// =======================
// 🔹 OBJECT HANDLING
// =======================
const user = {
    username: "Arko",
    price: 200,
};

function handleObject(user) {
    return `User: ${user.username}, Budget: ${user.price}`;
}

console.log(handleObject(user));

// =======================
// 🔹 ARRAY FUNCTION
// =======================
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(arr) {
    return arr[1];
}

console.log("Second value:", returnSecondValue(myNewArray));

// =======================
// 🔹 SCOPE (let vs var)
// =======================
let a = 400;

if (true) {
    let a = 30;
    console.log("INNER:", a);
}

console.log("OUTER:", a);

// var issue
var c = 99;

if (true) {
    c = 100;
}

console.log("VAR result:", c);

// =======================
// 🔹 CLOSURE (IMPORTANT)
// =======================
function one() {
    const username = "hitesh";

    function two() {
        console.log("Access parent:", username);
    }

    two();
}

one();

// =======================
// 🔹 THIS KEYWORD
// =======================
const Use = {
    username: "Arko",
    price: 18,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
};

Use.welcomeMessage();

function thisFunc() {
    let username = "uma";
    console.log(this.username); // undefined
}
thisFunc();

// =======================
// 🔹 ARROW FUNCTION + THIS
// =======================
const normalFunc = function () {
    let username = "Arko Sao";
    console.log(this.username); // undefined
};
normalFunc();

const arrowFunc = () => {
    let username = "dumka";
    console.log(this.username); // undefined
};
arrowFunc();

// =======================
// 🔹 OBJECT + ARROW THIS ISSUE
// =======================
const obj = {
    name: "Arko",
    show: () => {
        console.log(this.name); // undefined
    }
};

obj.show();

// =======================
// 🔹 ARROW FUNCTION (IMPLICIT)
// =======================
const multiply = (num1, num2) => num1 * num2;
console.log("Multiply:", multiply(3, 4));

const returnObject = () => ({ username: "umaa" });
console.log("Object return:", returnObject());
