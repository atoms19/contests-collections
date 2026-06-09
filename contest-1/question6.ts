let things = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]
let seen:any =[];

things=things.filter((thing)=>{
  let s =seen.some(t=>t==thing.id)
  seen.push(thing.id)
  return !s
})
console.log(things)
