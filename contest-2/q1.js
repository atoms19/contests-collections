

const students= [
  { name:"Aman", marks:78 },
  { name:"Riya", marks:91 },
  { name:"Kabir", marks:65 }
];


const altered = students.map(student=>{
  student.name =student.name.toUpperCase();
  let marks = student.marks
  if(marks > 90 && marks < 100){
	 student.marks = 'A'
  }else if(marks >70 && marks < 90){
	 student.marks = 'B'
  }else if(marks > 50 && marks < 70){
	 student.marks = 'C'
	}else if(marks > 30 && marks < 50){
	 student.marks = 'D'
	}else if(marks > 0 && marks < 30){
	 student.marks = 'E'
	}
  return student;
})
console.log(altered);
