/*INPUT: [10, 25, 8, 99, 67];
OUTPUT: 67
*/


function findSecondLargest(arr:number[]){
  for(let i = 0 ; i < arr.length ; i++){
	  for(let j = 0; j < arr.length-i-1; j++){
		   if(arr[j]>arr[j+1]){
             let temp = arr[j]
				 arr[j] = arr[j+1]
				 arr[j+1]= temp;
			}
	  }
  }
	  return arr[arr.length - 2] 
}
console.log(findSecondLargest([10, 25, 8, 99, 67]))

