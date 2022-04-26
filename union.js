var hello;
console.log(hello = "25");
function printTheCode(code) {
    console.log(code);
}
printTheCode(true);
function check(code) {
    return ("".concat(code, " ") + new Date().getFullYear());
}
console.log(check("hello"));
