import {readFile,writeFile} from 'fs'

async function generateReport(){
    let response = await readFile("fs/marks.json");
	 let json = await JSON.parse(response)
    let minFound = Infinity;
	 let maxFound = 0;
	 let sum= 0;
	 json.forEach(record =>{
        sum+=record.marks
		  minFound=Math.min(minFound,record.marks)
        maxFound = Math.max(maxFound,record.marks)
	 })

	 let average = sum/json.length;

	 let payload =`
Highest: ${maxFound}
Lowest: ${minFound}
Average: ${average}
	 `

	 await writeFileSync("fs/report.txt",payload);
  
}
generateReport()
