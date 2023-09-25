// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('Looping pertama')
let i = 1
while (i < 10) {
    console.log(i);
    i++;
  }
console.log('Looping kedua')
i = 9
while (i > 0) {
    console.log(i);
    i--;
  }
// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('Looping pertama')
for (i=1;i < 10;i++) {
    console.log(i);
  }
console.log('Looping kedua')
i = 9
for (i=9;i > 0;i--) {
    console.log(i);
  }
// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let jenis = ""
for (let a=1;a<=100;a++){
    if(a % 2 == 0){
        jenis = " Genap"
    } else {
        jenis = " Ganjil"
    }
    console.log(a+jenis)
}
//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("pertambahan 2")
for (let a=1;a<=100;a+=2){
    if(a % 3 == 0){
        console.log(a+" kelipatan 3")
    }
}
console.log("pertambahan 5")
for (let a=1;a<=100;a+=5){
    if(a % 6 == 0){
        console.log(a+" kelipatan 6")
    }
}
console.log("pertambahan 9")
for (let a=1;a<=100;a+=9){
    if(a % 10 == 0){
        console.log(a+" kelipatan 10")
    }
}
// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5
let bintang = "*"

// untuk loop console lognya
for(let b = 1; b <= input;b++){
    // untuk loop jumlah bintangnya
    let hasil = ""
    for (var j = 1;j<=b;j++){
        hasil += bintang
    }
    console.log(hasil)
}
//hasilnya
//*
//**
//***
//****
//*****