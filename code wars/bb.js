
// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

function nextSmaller(n) {
  let str = n.toString()
  for ( let a = str.length ; a >0;a--){
    
   if(str[a-1]<str[a-2]){

     let awal = str.slice(0,a-2)
     let tengah = str[str.length-1]
     let akhir = str.slice(a-2,str.length-1)
     let tengak = tengah+akhir
    //  console.log(akhir[0])
     if(tengah == akhir[0]){
       if(tengah == akhir[akhir.length-1]){
      return parseInt(awal+str.slice(-3)+str.slice(a-3,str.length-3))
       }
      return parseInt(awal+str.slice(-2)+str.slice(a-2,str.length-2))
     }
     if(awal+tengah+akhir>n){
      console.log(str[a-2])
      tengak = tengak.split('').sort().reverse()
      console.log(tengak)
      for(let b = 0;b<tengak.length;b++){
        if(str[a-2] == tengak[b]){
          let awall = tengak.slice(0,b+1).join('')
          if(str[1]==0){
            return -1
          }
          return parseInt(awal+tengak[b+1]+tengak.slice(0,b+1).join('')+tengak.slice(tengak.length-b).join(''))
        } 
      }
       return -1
     }
     return parseInt(awal+tengah+akhir)
    //  return str.slice(a-3,str.length-1)
}
    
   
  }
  return -1;
}


console.log(nextSmaller(8981130038))
//   bouncingBall(3.0, 1.0, 1.5)
