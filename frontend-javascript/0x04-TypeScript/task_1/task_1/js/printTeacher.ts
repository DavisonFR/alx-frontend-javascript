// ✅ Define interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Implement printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ✅ Call the function to ensure it runs
console.log("TESTING printTeacher execution...");
console.log(printTeacher("John", "Doe"));  // Expected Output: J. Doe
console.log(printTeacher("Alice", "Smith"));  // Expected Output: A. Smith
