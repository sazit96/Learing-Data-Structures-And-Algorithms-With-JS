const compressAllBoxes = (boxes) => {
  boxes.forEach((box) => console.log(box));
};

const boxes = ['box1', 'box2', 'box3'];
compressAllBoxes(boxes);

function crossAdd(input) {
  var answer = [];
  for (let i = 0; i < input.length; i++) {
    let goingUp = input[i];
    let goingDown = input[input.length - 1];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
console.log(crossAdd([1, 3, 4, 5, 5, 6, 7, 8]));

function finding(find, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == find) return console.log('find');
  }
}
finding(2, [1, 3, 4, 5, 6, 6, 2]);
