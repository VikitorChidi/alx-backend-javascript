export function getStudentIdsSum(arrayParam = []) {
  if (!Array.isArray(arrayParam)) {
    return [];
  }

  return arrayParam.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0
  );
}

// console.log(
//   getStudentIdsSum([
//     { id: 1, name: "Victor" },
//     { id: 2, name: "Chisom" },
//     { id: 7, name: "Dell" },
//   ])
// );
