/**
Fungsi fizzBuzz menerima parameter n, yang merupakan batas atas dari urutan angka yang akan di-generate.
Fungsi ini mencetak angka dari 1 hingga n, dengan menggantikan angka yang habis dibagi 3 dengan 'Fizz'
dan angka yang habis dibagi 5 dengan 'Buzz'. Jika angka habis dibagi 3 dan 5, maka 'FizzBuzz' dicetak.
* @param n
*/

function fizzBuzz(n: number) {
  for (let index = 0; index <= n; index++) {
    let output = "";
    if (index % 3 === 0) {
      output += "Fizz";
    }
    if (index % 5 === 0) {
      output += "Buzz";
    }
    // Jika output tidak kosong, cetak output; jika tidak, cetak angka itu sendiri.
    console.log(`Result ${output} || ${index}`);
  }
}
// Nilai n yang ditetapkan untuk contoh ini adalah 15.
const n = 15;
fizzBuzz(n);
