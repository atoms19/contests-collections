const students= [
  { name:"A", branch:"CSE" },
  { name:"B", branch:"ECE" },
  { name:"C", branch:"CSE" },
  { name:"D", branch:"ME" }
];

let grouped = Object.groupBy(students,(s)=>s.branch)
console.log(grouped)
