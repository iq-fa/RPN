/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    // code di sini
    return arrNumber.sort(function (a, b) { return a - b }).reverse()
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length<1){
        return ''
    }
    for(let n = 1;n<arrNumber.length+1;n++){
        if(arrNumber[n-1]<arrNumber[n]){
            return 'angka paling besar adalah '+ arrNumber[0]+' dan jumlah kemunculan sebanyak '+n+' kali'
        }
    }
    return 'angka paling besar adalah '+ arrNumber[0]+' dan jumlah kemunculan sebanyak '+arrNumber.length+' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    // console.log(listSort)
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''


  console.log("soal 2")


  /*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let a = 'aiueoAIUEO'
    let b = 'bjvfpBJVFP'
    let baru = []
    for(let s=0;s<str.length;s++){
        if(a.indexOf(str[s])<0){
            // console.log(str[s])
            baru.push(str[s])
        }else{
            let ubah = b[a.indexOf(str[s])]
            baru.push(ubah)
        }
    }
    return baru
  }
  
  function reverseWord (str) {
    //code di sini
    let baru = []
    for(let s = str.length;s>0;s--){
        baru.push(str[s-1])
    }
    return baru
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    // console.log(str)
    let baru = []
    for(let s=0;s<str.length;s++){
        if(str[s]==str[s].toUpperCase()){
            baru.push(str[s].toLowerCase())
        } else {
            baru.push(str[s].toUpperCase())
        }
    }
    return baru
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.join('').replace(' ','')
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    name = name.split('')
    let cv = changeVocals(name)
    let rw = reverseWord(cv)
    let sluc = setLowerUpperCase(rw)
    let rs = removeSpaces(sluc)
    return rs
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  console.log("soal 3")


  /*
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/

function makanTerusRekursif(waktu) {
    // you can only write your code here!
    if(waktu <1){
        return 0
    } else {
        return 1 + makanTerusRekursif(waktu-15)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0


  console.log("soal 4")

  /*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
    let huruf = angka.toString()
    huruf = huruf.split('')
    if(huruf.length==0){
        return 0
    } else {
        // let plus = parseInt(huruf[huruf.length-1])
        let poped = huruf.pop()
        // console.log(poped)
        huruf = huruf.join('')
        return parseInt(poped) + totalDigitRekursif(huruf)
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5


  console.log("soal 5")

  /*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    // console.log(angka)
    let huruf = angka.toString()
    huruf = huruf.split('')
    if(huruf.length == 1){
        return angka
    } else {
        let kali = 1
        for (let h=0;h<huruf.length;h++){
            kali *=huruf[h]
        }
        // console.log(kali)
        return kaliTerusRekursif(kali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6