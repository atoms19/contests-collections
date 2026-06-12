let collegeList = [ {
    name: "MITS",
    departments: [
      { name: "CSE", students: [{ name: "A", cgpa: 8.2 }, { name: "B", cgpa: 9.1 }] },
      { name: "ECE", students: [{ name: "C", cgpa: 7.5 }] }
    ]
  },
  {
    name: "NIT",
    departments: [
      { name: "ME", students: [{ name: "D", cgpa: 8.8 }, { name: "E", cgpa: 6.9 }] }
    ]
  }
];


let c = collegeList.map(college=>college.departments.map(dept=>dept.students.map(stud=>({...stud,college:college.name,dept:dept.name})))).flat().flat().filter(stud=>stud.cgpa>=8)
console.log(c)
