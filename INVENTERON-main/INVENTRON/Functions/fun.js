// Function Declaration
function declarationDemo() {
    function greet() {
        console.log("Hello from Function Declaration");
    }
    greet();
}

// Function Expression
function expressionDemo() {
    const greet = function () {
        console.log("Hello from Function Expression");
    };
    greet();
}

// Arrow Function
function arrowDemo() {
    const greet = () => {
        console.log("Hello from Arrow Function");
    };
    greet();
}

// Parameters & Return
function parameterDemo() {
    function add(a, b) {
        return a + b;
    }

    let result = add(5, 10);
    console.log("5 + 10 =", result);
}

// Callback Function
function callbackDemo() {
    function process(callback) {
        console.log("Processing...");
        callback();
    }

    process(function () {
        console.log("Callback Executed!");
    });
}