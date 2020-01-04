import flatten from './index';

/** @test {flatten} */
describe('flatten', () => {
  const exceptFlattenToEqual = (input, output) =>
    expect(flatten(input)).toEqual(output);

  it('should work in case of 3 steps deep', () =>
    exceptFlattenToEqual([[1, 2, [3]], 4], [1, 2, 3, 4]));

  it('should work in case of multiple 4 steps deep', () =>
    exceptFlattenToEqual(
      [[1, 2, [3, 4, [5, 6]]], 7, [8, [[[9, 10, 11]]]]],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    ));

  it('should work in case of flat input', () =>
    exceptFlattenToEqual([1, 2, 3, 4], [1, 2, 3, 4]));

  it('should work in case of empty array', () => exceptFlattenToEqual([], []));

  it('should work when not suplling array', () => exceptFlattenToEqual(1, [1]));
});
