const users= [
  { id:1, email:"a@test.com" },
  { id:2, email:"b@test.com" },
  { id:3, email:"a@test.com" },
  { id:4, email:"c@test.com" }
];

let dupes =users.filter((user)=>{
  return users.map(another=>another.email==user.email && another.id!=user.id)[0] 
})

console.log(dupes)
