function cariMean(arr) {
    let jml = 0
    for (let a = 0;a<arr.length;a++){
        jml += arr[a]
    }
    let mean = jml / arr.length
    mean = Math.round(mean)
    return mean
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  
  //tips baca dokumentasi Math js untuk pembulatan

  console.log("soal 2")

  /*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
function perkalianUnik(arr) {
    let arrBaru = []
    let b = 1
    for(let a = 0;a<arr.length;a++){
        b = 1
        for (let c = 0;c<arr.length;c++){
            if (a != c){
                b *= arr[c]
            }
        }
        arrBaru.push(b)
    }
    return arrBaru
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

  console.log("soal 3")
  //tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    let slsh = arr[1]-arr[0]
    // console.log(slsh)
    for (let a = 1;a<arr.length-1;a++){
        if(slsh != arr[a+1]-arr[a]){
            // console.log(arr[a+1])
            return false
        }
    }
    return true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false