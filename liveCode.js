/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/
console.log("soal 1")
function findNotRelative(arr1, arr2) {
    let arr = []
    for(let a=0;a<arr1.length;a++){
        let kondisi = true
        for(let b=0;b<arr2.length;b++){
            
            if(arr1[a]==arr2[b]){
               kondisi = false
            }
        }
        if (kondisi){
            arr.push(arr1[a])
        }
    }
    // for(let a=0;a<arr1.length;a++){

    //         if(arr1[a]==arr2[a]){
    //             arr.push(arr1[a])
    //         }

    // }

    return arr
    //code here
  }
  
  console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
  console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
  console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]


  console.log("soal 2")
  /*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
    //code here
    let str = num.toString()
    
    if(str[0]==0){
        return num
    } else {
        num = str[0]-1+str
        return numberIterator(num)
    }
  }
  console.log(numberIterator(5)); // '012345'
  console.log(numberIterator(7)); // '01234567'
  console.log(numberIterator(3)); // '0123'
  console.log(numberIterator(1)); // '01'
  console.log(numberIterator(0)); // '0'

  console.log("soal 3")

  /*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa 
array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key 
berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating(penumpang) {
    //code here
    let kereta = {}
    for(let p =0;p<penumpang.length;p++){
        if(!kereta[penumpang[p].gerbong]){
            kereta[penumpang[p].gerbong]=[]
        }
        kereta[penumpang[p].gerbong].push({nama:penumpang[p].nama,seat:penumpang[p].seat})
    }
    return kereta
  }
  
  
  console.log(trainSeating([{
      nama: "Awtian",
      gerbong: "VVIP",
      seat: 'A1'
    },
    {
      nama: "Klonoa",
      gerbong: "VIP",
      seat: 'V1'
    },
    {
      nama: "Azizy",
      gerbong: "VVIP",
      seat: 'A2'
    },
    {
      nama: "Crash",
      gerbong: "Regular",
      seat: 'R1'
    },
    {
      nama: "Sena",
      gerbong: "Regular",
      seat: 'R3'
    },
    {
      nama: "Heri",
      gerbong: "Regular",
      seat: 'R10'
    },
    {
      nama: "Retsu",
      gerbong: "VIP",
      seat: 'V2'
    },
    {
      nama: "Hiruma",
      gerbong: "VVIP",
      seat: 'A666'
    },
    {
      nama: "Tsubasa",
      gerbong: "VIP",
      seat: 'V6'
    }
  ]));
  /*
  Output :
  {
    VVIP:
     [ { nama: 'Awtian', seat: 'A1' },
       { nama: 'Azizy', seat: 'A2' },
       { nama: 'Hiruma', seat: 'A666' } ],
    VIP:
     [ { nama: 'Klonoa', seat: 'V1' },
       { nama: 'Retsu', seat: 'V2' },
       { nama: 'Tsubasa', seat: 'V6' } ],
    Regular:
      [ { nama: 'Crash', seat: 'R1' },
        { nama: 'Sena', seat: 'R3' },
        { nama: 'Heri', seat: 'R10'} ]
  }
  */

  console.log("soal 5")

  function piramid2(num) {
    //code here
    let pertama = '1'
    let akhir =''
    for(let a=2;a<=num;a++){
        let temp = ''
        if(a<2){

        }
        for(let b=2;b<=a+1;b++){
            temp += a.toString()
        }
        pertama = temp + '\n' + pertama
        akhir += '\n' +temp
        // console.log(pertama+akhir)
    }
    return pertama+akhir
  }
  
  console.log(piramid2(5))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */

