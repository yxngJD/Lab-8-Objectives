// Part 1: Creating the student object
const student = {
    name: "Jordan Dale",
    age: 20,
    enrolled: true,
    courses: ["JavaScript", "OOP", "Web Development"],
    displayInfo() {
      return `${this.name} is ${this.age} years old and enrolled: ${this.enrolled}`;
    }
  };
  
  console.log("---- Part 1 ----");
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Display Info:", student.displayInfo());
  
  // Part 2: Working with JSON
  console.log("---- Part 2 ----");
  const studentJSON = JSON.stringify(student);
  console.log("JSON String:", studentJSON);
  
  const studentParsed = JSON.parse(studentJSON);
  console.log("Parsed Object:", studentParsed);
  
  // Part 3: Destructuring
  console.log("---- Part 3 ----");
  const { name, courses } = student;
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  
  const scores = [85, 92, 78, 90];
  const [firstScore, secondScore] = scores;
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  
  // Part 4: Spread Operator
  console.log("---- Part 4 ----");
  const studentClone = { ...student, graduationYear: 2025 };
  console.log("Cloned Student with Graduation Year:", studentClone);
  
  const newCourses = ["React", "Database"];
  const combinedCourses = [...student.courses, ...newCourses];
  console.log("Combined Courses:", combinedCourses);
  
  // Part 5: Object Methods
  console.log("---- Part 5 ----");
  
  student.addCourse = function(newCourse) {
    this.courses.push(newCourse);
  };
  
  student.totalCourses = function() {
    return this.courses.length;
  };
  
  student.addCourse("UI/UX");
  console.log("Courses after adding UI/UX:", student.courses);
  console.log("Total number of courses:", student.totalCourses());
  
  // Bonus Task: Average Score using reduce()
  console.log("---- Bonus ----");
  const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
  console.log("Average Score:", averageScore);
  