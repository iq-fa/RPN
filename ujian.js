/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let o = ''
    let x = ''
    let jarak = 0
    for(let a = 0;a<arr.length;a++){
        if(arr[a]=="o"){
            o = a+1
            if(x!=''){
                if(jarak == 0){
                    jarak = o-x
                    // console.log("jarak baru")
                } else if(jarak>o-x){
                    jarak = o-x
                    // console.log("revisi jarak")
                } else {
                    // console.log("ngga ngapa ngapain")
                }
            } 
        } else if (arr[a] == "x"){
            x = a+1
            if(o!=''){
                if(jarak == 0){
                    jarak = x-o
                    // console.log("jarak baru")
                } else if (jarak>x-o){
                    jarak = x-o
                    // console.log("revisi jarak")
                } else {
                    // console.log("ngga ngapa ngapain")
                }
            }
        }
        // console.log(o + " "+x)
    }
    // console.log("")
    return jarak
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  console.log("soal 2")

  /*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
    let arrBaru = [[],[],[]]
    for(let a = 0;a<arr.length;a++){
        if(arr[a]%3==0){
            arrBaru[2].push(arr[a])
        } else if (arr[a]%2 == 0){
            arrBaru[0].push(arr[a])
        } else (
            arrBaru[1].push(arr[a])

        )
    }
    return arrBaru
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  console.log("soal 3")
  /*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    // you can only write your code here!
    let animalUrut = animals.sort()
    let grup = []
    let urutan = 0
    for(let a = 0;a<animals.length;a++){
        // console.log(animalUrut[a][0])
        if (grup.length <1){
            grup.push([])
            grup[0].push(animalUrut[a])
        } else{
            if(grup[urutan][0][0]==animalUrut[a][0]){
                grup[urutan].push(animalUrut[a])
            } else {
                urutan += 1
                grup.push([])
                grup[urutan].push(animalUrut[a])
            }
        }
        // console.log(grup[urutan][0][0])
    }
    return grup
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]