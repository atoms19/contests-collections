const roles={ admin:["read","write"], user:["read"], staff: ["write"]}
let checkRole="user"
let action="read"


if(!roles[checkRole]) console.error("could not find user")

console.log(roles[checkRole].some(actions => actions==action))
