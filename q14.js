let som= [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];
let filsom=som.filter((el)=>el.taskcompleted>5);
console.log(filsom)
let mapemp=filsom.map(emp=>{
  let performance=""
  if(emp.rating>4.5){
    performance="Excellent"
  }else if(emp.rating>=3 && emp.rating<=4.5){
    performance="Good"
  }else{
    performance="Needs Improvement"
  }
  return {name:emp.name,performance}
})
let order={"Excellent":3,"Good":2,"Needs Improvement":1}
let sorted=mapemp.sort((a,b)=>{
  return order[b.performance]-order[a.performance];
})
console.log(sorted)
