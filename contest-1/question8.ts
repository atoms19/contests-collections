

let fruits = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]


let op = Object.groupBy(fruits,(item)=>item.category)
for(const keys of Object.keys(op)){
	 op[keys]= op[keys].map(item=>item.id)
}

console.log(op)
