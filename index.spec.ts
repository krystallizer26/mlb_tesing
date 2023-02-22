import { merge } from "./index";

describe("Testing array merging", () => {
  test("Merging 2 equal arrays that need nothing but concatinating.", () => {
    expect(merge([0, 1, 2], [3, 4, 5])).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  test("Merging 2 equal arrays that need shuffling datas.", () => {
    expect(merge([1, 4, 5], [0, 2, 3])).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  test("Merging 2 unequal arrays while the first array is bigger.", () => {
    expect(merge([1, 2, 3, 4, 5, 6], [0, 7, 8])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  test("Merging 2 unequal arrays while the second array is bigger.", () => {
    expect(merge([1, 6, 8], [0, 2, 3, 4, 5, 7])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  test("Merging 2 arrays while the first array is empty.", () => {
    expect(merge([], [0, 2, 3, 4, 5, 7])).toStrictEqual([0, 2, 3, 4, 5, 7]);
  });

  test("Merging 2 arrays while the secode array is empty.", () => {
    expect(merge([1, 4, 6, 8, 12], [])).toStrictEqual([1, 4, 6, 8, 12]);
  });
});
