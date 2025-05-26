// ✅ Define Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // Optional attribute
  [key: string]: any;  // Allows additional properties
}

// ✅ Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// ✅ Create and log Directors object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
