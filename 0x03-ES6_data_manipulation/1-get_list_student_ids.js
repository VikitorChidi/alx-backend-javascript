function getListStudentIds(arrayParam = []) {
  if (!Array.isArray(arrayParam)) {
    return [];
  }

  return arrayParam.map((val) => val.id);
}

// console.log(
//   getListStudentIds(
//     (testArray = [
//       { id: 1, name: "victor" },
//       {
//         id: 2,
//         firstName: "James",
//         location: "Columbia",
//       },
//     ])
//   )
// );

console.log(getListStudentIds("hello"));
