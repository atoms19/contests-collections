import {readFileSync,writeFileSync} from "fs"


async function getReports(){

    let users = await JSON.parse(await readFileSync("fs/students.json",'utf-8'))
	 let marks =await JSON.parse( await readFileSync("fs/marks.json",'utf-8'))
    let payload = ``
	 for(const user of users){
		  let [mark] = marks.filter(record=>record.id==user.id)
		  
		  payload+=user.name+' - '+mark.marks+'\n'
	 }
	 await writeFileSync('fs/report.txt',payload)
}
getReports()
