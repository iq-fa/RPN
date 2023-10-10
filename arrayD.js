/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    //code here 
    if(arr.length<1){
        return 'invalid input parameter'
    }
    let a = []
    for(let b=arr.length;b>0;b--){
        if(arr[b-1].length%2==0){
            let temp =''
            for(let c=arr[b-1].length;c>0;c--){
                temp += arr[b-1][c-1]
            }
            a.push(temp)
        } else {
            a.push(arr[b-1])
        }
    }
    return a
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter


console.log("soal 2")


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

function findNotRelative(arr1, arr2) {
    //code here
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
  }
  
  console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
  console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
  console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]

  console.log("soal 3")

  /*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
    // your code here
    let baru = []
    let nilai = 0
    for(let a=0;a<arr.length;a++){
        if(nilai<arr[a]){
            nilai = arr[a]
            baru = [a]
        } else if(nilai==arr[a]){
            baru.push(a)
        } 
    }
    let selisih = 99
    if(baru.length<2){
        return 0
    } else {
        for(let b=1;b<baru.length;b++){
            if(baru[b]-baru[b-1]<selisih){
                selisih = baru[b]-baru[b-1]
            }
        }
    }
    return selisih
  }
  
  console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
  console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
  console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0