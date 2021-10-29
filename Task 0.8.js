function time(number) {
  let minute = 0;
  let Hr = 0;
  Hr =  Math.floor((number / 60));
  minute = (number % 60);
  if (minute >= 1) {
    console.log(`${Hr} hours, ${minute} minutes`);
  }
  else {
    console.log(`${Hr} hour, ${minute} minutes`)
  }

}
time(123)
