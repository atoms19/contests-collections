const users= [
  {
    name:"Aman",
    orders: ["Laptop","Mouse"]
  },
  {
    name:"Riya",
    orders: ["Keyboard"]
  }
];

let orders = users.map(user=>user.orders).flat()
console.log(orders)

