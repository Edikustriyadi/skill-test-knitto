/**
 * Fungsi palindrome memeriksa apakah sebuah string adalah palindrome atau bukan.
 * @param str
 * @returns boolean
 */

function palindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

const inputString = "kasur rusak!";
const result = palindrome(inputString);

console.log(`${inputString} is${result ? "" : " not"} a palindrome.`);
