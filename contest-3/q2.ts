const branchStudents = {
  CSE: ["Aman", "Riya"],
  ECE: ["Kabir"],
  ME: ["Arjun", "Sneha"]
};

let stus = {}
for(const keys of Object.keys(branchStudents)){
  branchStudents[keys].forEach(student=>{
		stus[student] = keys;
  })
}
console.log(stus)
