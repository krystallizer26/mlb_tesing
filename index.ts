export function merge(collection_1: number[], collection_2: number[]): number[] {
  let resultArray: number[] = [];
  let pos1:number = 0;
  let pos2:number = 0;
  while (pos1 <= collection_1.length && pos2 <= collection_2.length) {
    console.log(
      `Comparing... ${collection_1[pos1]} @${pos1} VS ${collection_2[pos2]} @${pos2}`
    );

    // Immediately stop comparing when one of the array is done sorting. Concating the remaining from the other array.
    if (collection_1[pos1] === undefined)
      return resultArray.concat(collection_2.slice(pos2, collection_2.length));
    if (collection_2[pos2] === undefined)
      return resultArray.concat(collection_1.slice(pos1, collection_1.length));

    // Comparing each pair of number starting from the lowest of each.
    if (collection_1[pos1] < collection_2[pos2]) {
      console.log(`Pushing: ${collection_1[pos1]} from A1[${pos1}]`);
      resultArray.push(collection_1[pos1]);
      pos1++;
    } else {
      console.log(`Pushing: ${collection_2[pos2]} from A2[${pos2}]`);
      resultArray.push(collection_2[pos2]);
      pos2++;
    }
  }

  return resultArray;
}

let arr1 = [0, 2, 6, 8, 12, 56];
let arr2 = [4, 7, 12, 15, 29, 43];

let resultArray = merge(arr1, arr2);
console.log(resultArray);
