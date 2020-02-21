import { find } from '../src/utils';

describe('should return correct index', () => {
  let index,
    list = [2, 4, 6, 8, 10];
  it('return 0', () => {
    index = find(list, 2);
    expect(index).toBe(0);
  });
  it('return 1', () => {
    index = find(list, 4);
    expect(index).toBe(1);
  });
  it('return 2', () => {
    index = find(list, 6);
    expect(index).toBe(2);
  });
  it('return 3', () => {
    index = find(list, 8);
    expect(index).toBe(3);
  });
  it('return 4', () => {
    index = find(list, 10);
    expect(index).toBe(4);
  });
  it('return -1', () => {
    index = find(list, 99);
    expect(index).toBe(-1);
  });
});
