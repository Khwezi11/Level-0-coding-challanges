function vowelCheck(name) {
  let vowels = /['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']/gi;
  let result = name.match(vowels);
  process.stdout.write(result + ", ");

}
vowelCheck("KhwezizaAmaAndsOmethIng")
