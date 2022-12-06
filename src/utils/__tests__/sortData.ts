import { sortData } from 'utils';
import { NOT_SORTED_DATA, SORTED_BY_DISTANCE_ASC, SORTED_BY_DISTANCE_DESC } from 'utils/testData';

describe('sort data', () => {
  it('data sorted by distance order asc', () => {
    expect(sortData(NOT_SORTED_DATA, 'distance', 'asc')).toStrictEqual(SORTED_BY_DISTANCE_ASC);
  });

  it('data sorted by distance order desc', () => {
    expect(sortData(NOT_SORTED_DATA, 'distance', 'desc')).toStrictEqual(SORTED_BY_DISTANCE_DESC);
  });
});
