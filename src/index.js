module.exports = function towelSort (matrix) {
  if ((matrix===undefined)||(!matrix.length)) return []
  let a = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      a.push(...matrix[i].sort((a,b) => a - b))
    } else {
      a.push(...matrix[i].sort((a,b) => b - a))
    }
  }
  return(a)
}