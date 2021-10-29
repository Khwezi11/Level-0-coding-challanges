function temp_switch(celsius) {
    return (celsius * 1.8) + 32;
}
console.log(temp_switch(50) + " Celsius")


function temp_switch2(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(temp_switch2(89) + " Fahrenheit")
