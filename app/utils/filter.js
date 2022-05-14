/* eslint-disable array-callback-return */
import moment from 'moment';

export const filter = (data, startDate, endDate) => {
  let filtered = data.filter((date) => {
    let current = moment(date.date_ms).format('YYYY-MM-DD');
    if (moment(current).isBetween(startDate, endDate)) {
      return date;
    }
  });
  return filtered;
};
