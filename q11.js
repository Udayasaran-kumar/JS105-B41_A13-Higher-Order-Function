let som=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(a){
  let arr = a.map((el)=>{return el.name});
  a.forEach((el)=>{if(el.price>50){
    console.log(el.name+ " is above 50");
  }else
  console.log(el.name+ " is below 50");
});
  
}
processProducts(som);
