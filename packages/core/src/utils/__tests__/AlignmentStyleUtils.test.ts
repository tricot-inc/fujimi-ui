import type {Alignment} from '../../styles/variables';
import {getAlignmentValue} from '../AlignmentStyleUtils';

describe('AlignmentStyleUtils', () => {
  test.each<[Alignment, string]>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['space-between', 'space-between'],
  ])('getAlignmentValue(%p) = %p', (input, expected) => {
    expect(getAlignmentValue(input)).toBe(expected);
  });
});
