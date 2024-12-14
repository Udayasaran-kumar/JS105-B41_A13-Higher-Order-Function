let som=[ { name: "Alice", marks: 58 },

{ name: "Bob", marks: 85 },

{ name: "Charlie", marks: 92 },

{ name: "David", marks: 45 } ];
function processStudents(a){
 let arr=a.filter((el)=>el.marks>60);
 let desce=arr.sort((a,b)=>{
    return b.marks-a.marks});
    let newarr=desce.map((el)=>{return el.name});
    return newarr;
}
let final=processStudents(som);
console.log(final);
