function common(word1, word2) {
  let newWord1 = word1.split('');
  let newWord2 = word2.split('');

  for (let alphabet = 0; alphabet < newWord1.length; alphabet++) {
    for (let alphabet2 = 0; alphabet2 < newWord2.length; alphabet2++) {
      if (newWord1[alphabet] == newWord2[alphabet2]) {
        let letters = ("COmmon letters: "[0] + newWord1[alphabet]);

        process.stdout.write(letters + ", ")
      }
  }

  }

}
common("Theka", "Thembkaaa")
