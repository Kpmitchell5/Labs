const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    let firstword = word.match(/[aeiou]/g);
    let vowel = word.indexOf(firstword[0]);
    newString = word.substring(vowel) + word.substring(0, vowel) + "ay";
    return newString;
  }
};

module.exports = translate;
