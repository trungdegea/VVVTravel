export const splitToSubArrays = (array=[], perArray=8 ) => {
  const result = [];
  while (array.length) {
    const temp = array.splice(0, perArray);
    result.push(temp);
  }
  return result;
}