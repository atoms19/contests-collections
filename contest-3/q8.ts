import { delay } from "./q7.ts";

function unreliableUpload(file) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) reject(new Error(`Upload failed: ${file}`));
      else resolve(`Uploaded: ${file}`);
    }, 500);
  });
}


async function retry(fn:any,attempts:number){
  let savedErr;
  let returnval;
  let delta=500;
	 for(let i =0; i < attempts; i++){
		 try{
		  returnval = await fn()
		  savedErr=undefined
		  break
		 }catch(er){
				console.log(` Attempt ${i+1} failed, retrying..`)
				savedErr=er
		 }
		 await delay(delta,null)
		 delta+=500
	 }
	 if(savedErr){
      throw savedErr
	 }else{
     return returnval
	 }
}


retry(() => unreliableUpload("resume.pdf"), 5)
  .then(console.log)
  .catch((err) => console.log("All attempts failed:", err.message));
