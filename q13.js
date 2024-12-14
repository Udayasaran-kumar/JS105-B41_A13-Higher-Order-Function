let som= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let obj =som.reduce((acc,el,i,arr)=>{
  return Object.entries(el)
},0)
console.log(obj)
