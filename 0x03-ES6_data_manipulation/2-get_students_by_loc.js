export function getStudentsByLocation(arrayParam = [], filterParam) {
  if (!Array.isArray(arrayParam)) {
    return [];
  }
  return arrayParam.filter((val) => val.location === filterParam);
}

// console.log(
//   getStudentsByLocation(
//     [
//       { id: 1, location: "Eko" },
//       { id: 2, location: "Dubai" },
//       { id: 3, location: "New York" },
//       { id: 4, location: "New York" },
//       { id: 5, location: "New York" },
//     ],
//     "New York"
//   )
// );
