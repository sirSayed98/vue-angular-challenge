/* eslint-disable no-undef */
import { filter } from '../utils/filter';

test('Date range filter', () => {
  expect(filter([{ date_ms: 1641859200000 }], '2022-1-10', '2022-1-12')).toStrictEqual([
    { date_ms: 1641859200000 },
  ]);
});
