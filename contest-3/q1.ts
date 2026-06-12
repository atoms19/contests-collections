const players = [
  { name: "Aman", score: 320 },
  { name: "Riya", score: 410 },
  { name: "Kabir", score: 410 },
  { name: "Arjun", score: 250 },
  { name: "Sneha", score: 320 }
];
const leadearBoard = players.sort((pa,pb)=>pb.score-pa.score).map((p,i)=>({...p,rank:i+1}))
console.log(leadearBoard)
