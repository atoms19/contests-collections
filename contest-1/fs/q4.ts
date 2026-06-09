import {readFileSync,writeFileSync} from "fs"

async function sequentialFile(){
    let resp = await readFileSync("fs/message.txt","utf-8")
	 let up = resp.toUpperCase();
	 await writeFileSync('fs/uppercase.txt',up)
	 let readagain = await readFileSync('fs/uppercase.txt','utf-8')
	 let splits = readagain.trim().split(' ')
	 let load = `Toatl words ${splits.length}`

	 await writeFileSync('fs/summary.txt',load);

}
sequentialFile()
