const list2 = [1, 2, 3];
const list1 = ['a', 'b', 'c'];

function zipList(first, second) {
  const retList = [];
  for (let i = 0; i < first.length; i++) {
    retList.push(first[i], second[i]);
  }
  return retList;
}

console.log(zipList(list1, list2));

function zipTheSimpleWay (first, second) {
  return _.flatten(_.zip(first, second));
}

console.log(zipTheSimpleWay(list1, list2));
