import {readFile} from "fs"

export function delay(mils:number,value:any,shouldfail:boolean=false){
	return new Promise((res,rej)=>{
      setTimeout(()=>{
		  if(shouldfail) rej("rejected")
			 res(value)
		},mils)
	})
}

function test(){
delay(1000,"hello").then(v=>console.log(v))

delay(1000,"hello",true).then(v=>console.log(v))
.catch(er=>console.error(er))


let promisifiedRead = promisify(readFile)
promisifiedRead("a.txt","utf-8").then(data=>console.log(data)).catch(err=>console.error(err))
}

function promisify(fn:any){
  return (...args:any[])=>{
	 return new Promise((res,rej)=>{
		fn(...args,(err:any,data:any)=>{
		  if(err) rej(err)
		   res(data)
		})
  })
  }
}


