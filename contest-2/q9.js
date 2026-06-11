

import { readFile, writeFile } from "fs"

readFile("users1.json", "utf-8", (err,data1) => {
	readFile("users2.json", "utf-8", (err,data2) => {
		  let jsparse = JSON.parse(data1)
	     let jsparse2 = JSON.parse(data2)
	     let newFile = [...jsparse,...jsparse2]
	     writeFile("merged.json",JSON.stringify(newFile),()=>{})
	})
})
