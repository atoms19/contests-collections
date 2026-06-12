const orders = [
  "Laptop", "Mouse", "Laptop", "Keyboard",
  "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor",
];

let maps = new Map();
orders.forEach(order=>{
    maps.set(order,(maps.get(order)??0)+1)
})
let b =Array.from(maps.keys()).sort((key1,key2)=>{
	 return maps.get(key2)-maps.get(key1)
})
console.log({
  product:b[1],
  count:maps.get(b[1])
})
