function functionName() {
    alert(arguments.callee.name);
}

// Example usage:
functionName(); // This will display an alert with the text "functionName"

// Another example with a different function name:
function AccioJob() {
    alert(arguments.callee.name);
}

// Example usage:
AccioJob(); // This will display an alert with the text "AccioJob"