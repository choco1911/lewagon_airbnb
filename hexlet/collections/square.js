// module square
const square = (num) => {
  return num * num;
}

const fourSquare = (num) => {
  return square(num) * square(num);
}

module.exports.square = square;
module.exports.fourSquare = fourSquare;
