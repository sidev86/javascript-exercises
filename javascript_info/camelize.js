function camelize(str) {
  //Suddivido la stringa in parole, nei punti dove c è il simbolo '-'.
  //In questo modo so dove devo mettere la lettera maiuscola
  words = str.split("-");
  for (let i = 0; i < words.length; i++) {
    if (i == 0 && words[0] != "") {
      i++;
    }
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(camelize("webkit-transition"));
