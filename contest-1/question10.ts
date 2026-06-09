let aarr = { a: [1, [2, [3]]], b: [4, [5]] }

Object.keys(aarr).forEach(key=>{
	 aarr[key] = aarr[key].map(i=>Array.isArray(i)?i.flat():i).flat()
})

console.log(aarr)
