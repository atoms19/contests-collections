const fs = require("fs/promises");

async function totalLength(files) {
  let total = 0;
  files.forEach(async (file) => {
    const data = await fs.readFile(file, "utf-8");
    total += data.length;
  });
  return total;
}


async function totalLengthFixed(files){
  let total = 0;
  for await( const file of files ){
	 const data = await fs.readFile(file,"utf-8")
	 total+=data.length
  }
  return total;
}

totalLengthFixed(["a.txt", "b.txt", "c.txt"]).then(console.log); // 0 ???


/*
 *  use for await () loop
 *
*/




