import {readFileSync,writeFileSync} from "fs"


async function processNotifications(){
  let response = await readFileSync("fs/events.txt",'utf-8')
  let events = response.trim().split('\n')
  let freqCount = new Map<String,number>()
  for(const event of events){
	 freqCount.set(event,(!freqCount.get(event) ? 0: freqCount.get(event))+1);
  }

  console.log(freqCount)
  let payload = ''
  for  ( const mapkey of freqCount.keys()){
		 payload += `${mapkey}: ${freqCount.get(mapkey)} \n`
  }


  await writeFileSync('fs/analytics.txt',payload);

}

processNotifications()
