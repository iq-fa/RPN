function nextSmaller(n) {
    let str = n.toString()
    for ( let a = str.length ; a >0;a--){
      
     if(str[a-1]<str[a-2]){
  
       let awal = str.slice(0,a-2)
       let tengah = str[str.length-1]
       let akhir = str.slice(a-2,str.length-1)
       let tengak = tengah+akhir
       tengak = tengak.split('').sort().reverse()
       console.log(tengak)
       for(let b = 0;b<tengak.length;b++){
         if(str[a-2] > tengak[b]){
           let awall = tengak.slice(0,b).join('')
           let akhirr = tengak.slice(b,tengak.length-1).join('')
           console.log(awal)
           console.log(tengak[b])
           console.log(awall)
           console.log(akhirr)
           return parseInt(awal+tengak[b]+awall+akhirr)
         } 
       }
    //   //  console.log(akhir[0])
    //    if(awal+tengah+akhir>n){
    //     console.log(str[a-2])

    //      return -1
    //    }
    //    return parseInt(awal+tengah+akhir)
    //   //  return str.slice(a-3,str.length-1)
  }
      
     
    }
    return -1;
  }
  
  
  console.log(nextSmaller(907))