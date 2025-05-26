// ✅ Define the interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Implement the function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ✅ Ensure function runs
console.log("TESTING printTeacher execution...");
console.log(printTeacher("John", "Doe"));  // Expected Output: J. Doe
console.log(printTeacher("Alice", "Smith"));  // Expected Output: A. Smith
