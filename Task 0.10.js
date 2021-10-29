function common(word1, word2) {
  let newWord1 = word1.split('');
  let newWord2 = word2.split('');

  for (let alphabet = 0; alphabet < newWord1.length; alphabet++) {
    for (let alphabet2 = 0; alphabet2 < newWord2.length; alphabet2++) {
      if (newWord1[alphabet] == newWord2[alphabet2]) {
        const letters = new Set((newWord1[alphabet]));
        console.log(letters)
      }
  }

  }

}
common("Theka", "Thembkaaa")
