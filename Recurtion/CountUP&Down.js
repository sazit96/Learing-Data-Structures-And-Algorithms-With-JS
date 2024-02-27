function countUp(num) {
  if (num >= 10) {
    console.log('Done');
    return;
  }
  console.log(num);
  num++;
  countUp(num);
}
countUp(0);

function countDown(num) {
  if (num <= 0) {
    console.log('ALL DONE!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(10);
