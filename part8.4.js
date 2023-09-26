/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let kataBalik = ""
    for(let a = kata.length;a > 0 ;a--){
        kataBalik += kata[a-1]
    }
    return kata == kataBalik
  }
  console.log("soal 1")
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  
  console.log("soal 2")
  /*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    
    let kondisi = false
    while (kondisi == false){
        num++
        // console.log(num)
        stringNum = num.toString()
        numBalik = ""
        for(let a = stringNum.length;a > 0 ;a--){
            numBalik += stringNum[a-1]
        }
        if (num == numBalik){
            kondisi = true
        } else {
            kondisi = false
        }
        
    }
    return num
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

console.log("soal 3")
function hitungJumlahKata(kalimat) {
    return kalimat.split(" ").length

  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

console.log("soal 4")

function pasanganTerbesar(num) {
    let stringNum = num.toString()
    let pasangan = stringNum[0]+stringNum[1]
    for (let a = 1 ; a<stringNum.length;a++){
        if(pasangan <stringNum[a]+stringNum[a+1]){
            pasangan = stringNum[a]+stringNum[a+1]
        }
    }
    return pasangan
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99