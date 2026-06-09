
const transactions  = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

let userBalMap = new Map<String,number>();
transactions.forEach((transaction)=>{
	 userBalMap.set(transaction.user,(userBalMap.get(transaction.user)||0)+transaction.amount)
})

let ans={}

for( const key of userBalMap.keys()){
    ans[key] = userBalMap.get(key);
}

console.log(ans)

