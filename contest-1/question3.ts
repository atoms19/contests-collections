
let obj = { a: 0, b: null, c: "hello", d: undefined, e: 5 }

let keysvalid = Object.keys(obj).map(key=>{
   if(obj[key]){
	  return key
	}
})

let newObj ={}
keysvalid.forEach((key)=>{
  if(key!=undefined){
    newObj[key] = obj[key]
  }
})
obj = newObj;

console.log(newObj)
