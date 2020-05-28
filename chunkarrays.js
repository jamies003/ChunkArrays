// Write a function that splitd an array (first argument) into groups the length of size (second argument) and return them as a
// [[0,1],[2,3],[4,5] 3)

function chunkArrayInGroups(arr, size) {
  let chunkedArray = [];
  let tempArray = [...arr] // spread operator (...varName) anything you can iterate over
  for (let i = 0; i < arr.length/size; i++) {
    chunkedArray.push(tempArray.splice(0, size));
  }

  console.log(chunkedArray)
  console.log(`chunkArray: ${chunkedArray}`);
}
chunkArrayInGroups([7,3,11,21,9],2); 

function chunkArrayInGroups02(arr, size) {
  const chunkArray = [];
  let i = 0;
  while (i < arr.length) {

    chunkedArray.push(arr.slice(i + size)); i+= size;
  }
  console.log(chunkedArray);
  console.log(`chunkArray: ${chunkedArray}`);

}

chunkArrayInGroups02([4,3,11,2,14,16,22,32,11,44], 4);
