/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
    for(let a = 0;a<input.length;a++){
        console.log('nomor ID: '+input[a][0])
        console.log('Nama Lengkap: '+input[a][1])
        console.log('TTL: '+input[a][2]+" "+input[a][3])
        console.log('Hobi: '+input[a][4])
        console.log("")
    }
}

dataHandling(input)

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/




input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy"
    input[2] = "Provinsi Bandar Lampung"
    input[4] = "Pria"
    input[5] = "SMA Internasional Metro"
    console.log(input)
    bulan = ["","Jan","Feb","Mar","Apr","Mei"]
    splitLahir = input[3].split('/')
    bulanLahir = parseInt(splitLahir[1])
    console.log(bulan[bulanLahir])
    let yyyyddmm =[]
    yyyyddmm[0] = splitLahir[2]
    yyyyddmm[1] = splitLahir[0]
    yyyyddmm[2] = splitLahir[1]
    console.log(yyyyddmm)
    formatSetrip = input[3].replace("/","-").replace("/","-")
    console.log(formatSetrip)
    console.log(input[1].slice(0,15))

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */