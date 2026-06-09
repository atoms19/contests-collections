let sales = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

let s = Object.groupBy(sales,(sales)=>sales.category)

Object.keys(s).forEach(key=>{
   s[key] = s[key].reduce((sum,sales)=>sum+sales.price,0)
})

console.log(s)
