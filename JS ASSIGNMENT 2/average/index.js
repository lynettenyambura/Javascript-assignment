// Define an array of objects containing the student names and marks
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
  ];
  
  // Calculate the average marks
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = totalMarks / students.length;
  
  // Determine the corresponding grade for each student
  students.forEach(student => {
    let grade;
    if (student.marks < 60) {
      grade = 'F';
    } else if (student.marks < 70) {
      grade = 'D';
    } else if (student.marks < 80) {
      grade = 'C';
    } else if (student.marks < 90) {
      grade = 'B';
    } else {
      grade = 'A';
    }
    
    console.log(`${student.name} - ${grade}`);
  });
  
  // Print the average marks
  console.log(`Average Marks: ${averageMarks}`);
  