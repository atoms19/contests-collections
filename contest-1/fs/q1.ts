import {readFileSync,writeFileSync} from 'fs';

async function readAndAssemble(){

let result = await readFileSync('fs/users.json','utf-8')
let json = JSON.parse(result)

let emails=[]
json.forEach(record=>{
   emails.push(record.email)
})

let load =emails.join('\n')
await writeFileSync('fs/emails.txt',load)

}
readAndAssemble()
