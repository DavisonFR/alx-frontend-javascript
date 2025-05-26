// 1. Define the constructor interface
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// 2. Define the class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implement the class using both interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// 4. Create an instance and test the methods
const student = new StudentClass({ firstName: "Dawit", lastName: "Firew" });
console.log(student.displayName());         // Should print: Dawit
console.log(student.workOnHomework());      // Should print: Currently working
