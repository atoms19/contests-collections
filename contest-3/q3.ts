const cart = [
  { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
  { name: "Mouse", price: 500, qty: 2, category: "electronics" },
  { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
];

const coupons = {
  electronics: 0.10,   // 10% off
  fashion: 0.20        // 20% off
};

const discount = (itemPrice:number,cat:string)=>{
   let dis = (coupons[cat]??0)*100
	let discounted = ((100-dis)/100)*itemPrice
	return discounted
}

let final = cart.reduce((acc,item)=>acc+discount(item.price,item.category),0)

console.log(final)

