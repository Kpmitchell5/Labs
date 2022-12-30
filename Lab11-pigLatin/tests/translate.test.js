const translate = require("../src/translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("another");
    expect(result).toBe("anotherway");
  });
  test("words that start with the vowel e", () => {
    let result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test("words that start with the vowel i", () => {
    let result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test("words that start with the vowel o", () => {
    let result = translate("orange");
    expect(result).toBe("orangeway");
  });
  test("words that start with the vowel u", () => {
    let result = translate("under");
    expect(result).toBe("underway");
  });
  test("words that start with an uppercase vowel A", () => {
    let result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with one consonant", () => {
    let result = translate("hey");
    expect(result).toBe("eyhay");
  });
  test("word that starts with two consonants", () => {
    let result = translate("shown");
    expect(result).toBe("ownshay");
  });
  test("word that starts with three consonants", () => {
    let result = translate("scratch");
    expect(result).toBe("atchscray");
  });
});
