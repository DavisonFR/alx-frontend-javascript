// ✅ Define Employee Interface
interface Employee {
  salary: number;
}

// ✅ Define Director and Teacher Interfaces
interface Director extends Employee {
  workDirectorTasks(): void;
}

interface Teacher extends Employee {
  workTeacherTasks(): void;
}

// ✅ Create Employee Based on Salary
function createEmployee(salary: number): Employee {
  if (salary >= 1000) {
    return { salary, workDirectorTasks: () => console.log("Getting to director tasks") } as Director;
  }
  return { salary, workTeacherTasks: () => console.log("Getting to work") } as Teacher;
}

// ✅ Type Predicate to Identify Directors
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ✅ Function to Execute Work Based on Role
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks();
  }
}

// ✅ Test the Functions
console.log("Testing executeWork function:");
executeWork(createEmployee(200));   // Expected Output: Getting to work
executeWork(createEmployee(1000));  // Expected Output: Getting to director tasks
