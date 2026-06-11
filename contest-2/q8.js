import {readFile} from "fs"

readFile("sample.txt","utf-8",(err,data)=>{
   let lines = data.split('\n').length;
   let words = data.split('\n').join(' ').split(' ').length-1;
  let characters = data.length-1;
  console.log({
	 lines,
	 words,
	 characters,
  })

})
