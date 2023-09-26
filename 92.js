//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    let bagi = 0
    for (let a =0;a<=angka;a++){
        if(angka%a == 0){
            bagi +=1
        }
    }
    if(bagi < 3){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

  console.log("soal 2")
    //cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let kecil = 1
    if (angka1>angka2){
        kecil = angka2
    } else {
        kecil = angka1
    }
    for (let a = kecil;a>0;a--){
        if (angka2%a==0 && angka1%a ==0){
            return a
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1

  console.log("soal 3")
  function cariMedian(arr) {
    let angkaUrut = arr.sort(function(a, b){return a-b});
    if (arr.length%2 == 0){
        // console.log(angkaUrut[(arr.length)/2]/2)
     return (angkaUrut[(arr.length)/2]/2 + angkaUrut[(arr.length)/2-1]/2)
    } else {
        return angkaUrut[(arr.length+1)/2-1]
    }

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  console.log("soal 4")

  /*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    let jumlah = 1
    let modus = -1
    let jumlahSementara = 0
    for (let a =0;a<arr.length;a++){
        jumlahSementara = 1
        
        for (let b = a+1; b<arr.length;b++){
            if (arr[a]== arr[b]){
                jumlahSementara += 1
            }
        }
        if (jumlah < jumlahSementara ){
            jumlah = jumlahSementara
            modus = arr[a]
        }
        // console.log(jumlah)
    }
// console.log("")
    if (jumlah == 1||jumlah == arr.length){
        return -1
    } else {
        return modus
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  

  console.log("soal 5")

  //sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let huruf =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","S"]
    let baru = ""
    for (let a = 0;a<kata.length;a++){
        let angka = huruf.indexOf(kata[a])+1
        baru +=huruf[angka]
    }
   return baru 
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu