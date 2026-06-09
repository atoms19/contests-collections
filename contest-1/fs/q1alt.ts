import {readFile,writeFile} from 'fs';

function readAndAssemble(){

let result =  readFile('fs/users.json',{encoding:'utf-8'},(error,data)=>{
let json = JSON.parse(result)

let emails=[]
json.forEach(record=>{
   emails.push(record.email)
})

let load =emails.join('\n')
 writeFile('fs/emails.txt',load,()=>{})
})
}
readAndAssemble()
