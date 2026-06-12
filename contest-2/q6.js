const torders= [
"Laptop",
"Mouse",
"Laptop",
"Keyboard",
"Laptop",
"Mouse",
"Mouse",
  "Mouse"
];
let map = new Map();

torders.map((curr)=>{
  if(map.has(curr)){
   map.set(curr,map.get(curr)+1)
  }else{
	 map.set(curr,1);
  }
})
let arr = [...map.keys()].sort((a,b)=>map.get(b)-map.get(a))
console.log(arr[0])
