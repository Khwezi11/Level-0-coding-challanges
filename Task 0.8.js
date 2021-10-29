var minute = 0;
var Hr = 0;
function time(number) {
     Hr =  Math.floor((number / 60));
     minute = (number % 60);
}
time(577)
console.log(Hr + " hours, " + minute + " minutes.")
