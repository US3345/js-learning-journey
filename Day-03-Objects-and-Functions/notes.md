# Day 3 - Functions, Scope, Objects

## 🔹 Functions
- `return` → gives value back
- no return → undefined

Example:
function add(a, b) {
    return a + b;
}

---

## 🔹 Rest Operator (...)
- Used to collect multiple values into an array

Example:
function test(...nums) {
    return nums;
}

---

## 🔹 Scope
- `let`, `const` → block scoped
- `var` → function scoped (can cause bugs)

---

## 🔹 Closures
- Inner function can access outer function variables

---

## 🔹 this keyword
- Refers to current object
- Works inside object methods
- Does NOT work properly in normal functions

---

## 🔹 Arrow Functions
- Short syntax
- No own `this`
- Uses parent scope `this`

Example:
const add = (a, b) => a + b;
