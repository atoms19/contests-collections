let obj = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }


let mao = new Map<String,number>()
for(const [key,values] of Object.entries(obj)){
    for(let val of values){
		 if(mao.get(val)==undefined) {
			mao.set(val,0)
		  }
		  mao.set(val,mao.get(val)+1) 
	 }
}
let max:[String,number]|undefined=undefined;
for(const entry of mao){
   if(!max || entry[1] > max[1]){
	 max = entry 
  }
}

console.log(max[0])




