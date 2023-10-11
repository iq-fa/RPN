/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

function ganjilGenapAsianGames(date, data) {
    //code here
    if(date<1||date>31){
        return "invalid dates"
    }
    let angka = 0
    let rule = date%2
    // console.log(data[0].plat.split(' '))
    for(let d=0;d<data.length;d++){
        const plat = parseInt(data[d].plat.split(' ')[1])
        // console.log(plat)
        if(plat%2!=rule&&data[d].type =="Mobil"){
            angka ++
        }
    }
    return angka
    }
    
    console.log(ganjilGenapAsianGames(30, [{
      plat: 'B 1234 ABC',
      type: 'Mobil'
    }, {
      plat: 'A 2457 HE',
      type: 'Motor'
    }, {
      plat: 'AB 87 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(26, [{
      plat: 'A 24 HE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 24 WE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 XOXO',
      type: 'Mobil'
    }])) // 2
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 2431 HE',
      type: 'Motor'
    }, {
      plat: 'AB 8711 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Motor'
    }])) // 0
    
    console.log(ganjilGenapAsianGames(32, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates
    
    console.log(ganjilGenapAsianGames(0, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates


    console.log("soall 2")

    /*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
    let duit = []
    duit["Jeff Bezos"] = 100000
    duit["Larry Page"] = 95000
    duit["Jack Ma"] = 90000
    // let duit =   [
    //     { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    //     { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    //     { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
    //   ]
    let perusahaan = []
    perusahaan["Jeff Bezos"] = "Amazon"
    perusahaan["Larry Page"] = "Google"
    perusahaan["Jack Ma"] = "Alibaba"
    let transaksi = []
    for(let t=0;t<tradeActivity.length;t++){
      for(let d=0;d<tradeActivity[t].length;d++){
        let orang = tradeActivity[t][d].replace(/[^a-zA-Z ]/g, '')
        let qtt = parseInt(tradeActivity[t][d].replace(/[a-zA-Z +-]/g, ''))/100
        let calc = tradeActivity[t][d].replace(/[^+-]/g, '')
        console.log(calc)
        if(calc=="-"){
          // console.log(duit[orang])
          duit[orang] = duit[orang]-duit[orang]*qtt
          // console.log(duit[orang])
          transaksi.push({name:orang,deposit:duit[orang],owner:perusahaan[orang]})
        } else if(calc=="+"){
          duit[orang] = duit[orang]+duit[orang]*qtt
          // console.log(duit[orang])
          transaksi.push({name:orang,deposit:duit[orang],owner:perusahaan[orang]})
        }
      }
    }
    return transaksi
    // Regex.Replace(input, "[A-Za-z]", "")
}
  
  
  console.log(economyChangeSummary([
    ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
    ['Larry Page+2%', 'Larry Page-1%'],
    ['Jack Ma+4%'],
    ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
  ]));
  /* 
    [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
    { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
    { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
    { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
    { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
  */
  console.log("==============================================================================");
  
  console.log(economyChangeSummary([
    ['Jeff Bezos-10%']
  ]))
  /*
    [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
  */

    console.log("soal 3")

    /*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  //CODE HERE
  let grup ={}
  for(let s=0;s<studentsArr.length;s++){
    if(!grup[studentsArr[s][0]]){
      grup[studentsArr[s][0]] = []
      
    }
    grup[studentsArr[s][0]].push(studentsArr[s])
  }
  return grup
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/

console.log("soal 4")


/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  let trip = []
  let biaya = []
  biaya['Pesawat'] = 275000
  biaya['Kereta'] = 250000
  biaya['Bis'] = 225000
  let harga = [] 
  harga["OVO"] = (100-15)/100
  harga["Dana"] = (100-10)/100
  harga["Gopay"] = (100-5)/100
  harga["Cash"] = 100/100
  let kota = ["Yogyakarta","Semarang","Surabaya","Denpasar"]
  for(let a=0;a<arr.length;a++){
    let ket = arr[a].split("-")
    // console.log(ket) 
    let jarak = Math.abs(kota.indexOf(ket[2])-kota.indexOf(ket[1]))
    // console.log(jarak)
    // console.log(jarak*harga[emoney]*biaya[ket[3]])
    trip.push({ name:ket[0],
    departureCity:ket[1],
    destinationCity:ket[2],
    transport: ket[3],
    totalCost: jarak*harga[emoney]*biaya[ket[3]] })
  }
  for (var i = 0; i < trip.length; i++) {
    for (var j = 0; j < (trip.length - i - 1); j++) {
        if (trip[j].totalCost < trip[j + 1].totalCost) {
            var temp = trip[j]
            trip[j] = trip[j + 1]
            trip[j + 1] = temp
        }
    }
  }
  return trip
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];


console.log("5555555555555555")
/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'

CONSTRAINTS
============
- DILARANG menggunakan built-in function .map, .filter

*/

function deleteUndefinedKeys(data) {
  if(data.length<1){
    return 'No Data'
  }
  for(let d=0;d<data.length;d++){
    let objName = Object.keys(data[d])
    for(let o=0;o<objName.length;o++){
      if(data[d][objName[o]]== undefined){
        delete data[d][objName[o]]
      }
    }
  }
  return data
  //code here
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data