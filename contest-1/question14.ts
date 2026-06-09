let ons = { a: 10, b: 50, c: 30, d: 40 }
let N=2
let keysorted =Object.keys(ons).sort()
let candidate = keysorted[(keysorted.length-1)-N]
let res = Object.entries(ons).find(v=>{
  return v[1] == ons[candidate]
})
console.log(res[0])
