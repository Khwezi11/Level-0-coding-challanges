function maxNum(num1, num2, num3) {
    let max = num1;

    if (num2 > max && num2 > num3) {
        max = num2;
      }

    else if (num3 > max) {
        max = num3;
     }
    return max;
    }

    console.log(maxNum(66, 300, 1))
