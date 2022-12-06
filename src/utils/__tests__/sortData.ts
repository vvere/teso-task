import { notSortedData, sortData, sortedByDistanceAsc, sortedByDistanceDesc } from 'utils';

describe('sort data', () => {
  it('data sorted by distance order asc', () => {
    expect(sortData(notSortedData, 'distance', 'asc')).toStrictEqual(sortedByDistanceAsc);
  });

  it('data sorted by distance order desc', () => {
    expect(sortData(notSortedData, 'distance', 'desc')).toStrictEqual(sortedByDistanceDesc);
  });
});
