import {readFileSync,readFile} from "fs"


function readFilePromise(filename,format){
  return new Promise((resolve,reject)=>{
	     readFile(filename,format,(er,dat)=>{
			  if(er){
				 reject(er)
			  }
			 resolve(dat)
		  })
		  
	 })
}



async function getThings(){
let res = await readFileSync('a.txt','utf-8')
let res2 = await readFileSync('b.txt','utf-8')
let res3 = await readFileSync('c.txt','utf-8')


console.log(`${res} ${res2} ${res3}`.replaceAll('\n',''))
}

function getThingsOld(){
readFilePromise('a.txt','utf-8').then((res)=>{
   readFilePromise('b.txt','utf-8').then((res2)=>{
		readFilePromise('c.txt','utf-8').then((res3)=>{
               
	 console.log(`${res} ${res2} ${res3}`.replaceAll('\n',''))
		})
	})
})
}

getThingsOld()
