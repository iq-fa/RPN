//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here


// ---------------------------------------
console.log(word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

let javascript = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]+word[14]
let is = word[15]+word[16]
let so = word[18]+word[19]
let cool = word[21]+word[22]+word[23]+word[24]
console.log(javascript);
console.log(is)
console.log(so)
console.log(cool)



// -------------   --------------------------
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 2);

console.log('First Word: ' + exampleFirstWord3);


// ---------------------------------------
console.log('second Word: ' + word3.substring(4,15));
console.log('Third Word: ' + word3.substring(15,17));
console.log('fourth Word: ' + word3.substring(18,20));
console.log('fifth Word: ' + word3.substring(21,24));
// ---------------------------------------


// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 15);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 24);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('First Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('First Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);
console.log('First Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);
console.log('First Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);