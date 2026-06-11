const transactions= [
  { user:"Aman", type:"credit", amount:1000 },
  { user:"Aman", type:"debit", amount:200 },
  { user:"Riya", type:"credit", amount:500 },
  { user:"Riya", type:"debit", amount:100 }
];

let result = {}

transactions.forEach(trans =>{
   if(trans.type=="credit"){
	 result[trans.user] = (result[trans.user]??0)+trans.amount
	 }else if(trans.type=="debit"){
		result[trans.user]=(result[trans.user]??0)-trans.amount
	 }
})
console.log(result)
