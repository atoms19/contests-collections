

/*INPUT: [[1,2,3,4], [5,6,7,8], [10,4,2,1], [1], [-10, 8]]
OUTPUT: [10, 26, 17, 1, 0]
*/


function getSum(arr:number[][]){
      return arr.map(row=>{
		           const sum=row.reduce((sum,col)=>col+sum, 0)
					  return sum < 0 ? 0 : sum;
			 })
}

console.log(getSum( [[1,2,3,4], [5,6,7,8], [10,4,2,1], [1], [-10, 8]]))

