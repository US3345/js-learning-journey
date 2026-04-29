===============================
🔹 JavaScript Execution Context
===============================

JavaScript Execution Context is the environment where JavaScript code is executed.
Whenever we run any JavaScript program, the JavaScript engine automatically creates a Global Execution Context.

This Global Execution Context is stored inside the keyword "this".

In browser:
this → window object

In Node.js:
this → {}

JavaScript is single-threaded
→ Executes one line at a time
→ Uses Call Stack to manage execution

===============================
🔹 Types of Execution Context
===============================

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rarely used)


===============================
🔹 JavaScript runs in 2 phases
===============================

1. Memory Creation Phase (Creation Phase)
- Memory is allocated
- Variables → undefined
- Functions → stored with full definition

2. Execution Phase
- Code runs line by line
- Values assigned
- Functions executed


===============================
🔹 Example Code
===============================

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let res2 = addNum(val1, val2);
let result = addNum(1, 2);


===============================
🔹 DRY RUN (VERY IMPORTANT)
===============================

🧠 Step 1: Global Execution Context created

🧠 Step 2: Memory Phase (Global)

val1 → undefined
val2 → undefined
addNum → function definition
res2 → undefined
result → undefined


⚡ Step 3: Execution Phase (Global)

val1 = 10
val2 = 5

res2 = addNum(10, 5)

👉 Function Execution Context created for addNum()
Inside it:

Memory Phase (Function)
num1 → 10
num2 → 5
total → undefined

Execution Phase (Function)
total = 15
return 15 → goes back to Global Execution Context

Now:
res2 = 15


===============================

result = addNum(1, 2)

👉 New Function Execution Context created again

Memory Phase
num1 → 1
num2 → 2
total → undefined

Execution Phase
total = 3
return 3

Now:
result = 3


===============================
🔹 Important Understanding
===============================

Every function call creates a NEW execution context

After function finishes:
→ Its execution context is DELETED from call stack

Call Stack works like LIFO (Last In First Out)


===============================
🔹 Call Stack Flow
===============================

Global()
  ↓
addNum()
  ↓
removed
  ↓
addNum()
  ↓
removed



7. JS is single threaded
