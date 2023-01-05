interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Wick",
  fullTimeEmployee: true,
  yearsOfExperience: 8,
  location: "LA",
  contract: false,
};

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string;
}

// function printTeacher(
//   firstName: string,
//   lastName: string
// ): printTeacherFunction {
//   return `${firstName[0]}. ${lastName}`;
// }

// console.log(printTeacher);
