const products= [
  { name:"Laptop", price:80000 },
  { name:"Mouse", price:500 },
  { name:"Monitor", price:15000 },
  { name:"Keyboard", price:1200 }
];


const expensive = products.filter(p=>p.price > 5000);

console.log(expensive)
