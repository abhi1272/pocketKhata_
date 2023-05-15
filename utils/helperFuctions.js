import Moment from 'moment';

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  })
    .format(value)
    .slice(0, -3);

export function formatDate(date) {
  Moment.locale('en');
  return Moment(date).format('DD-MM-YYYY');
}

export function formatInputDate(date) {
  Moment.locale('en');
  return Moment(date).format('YYYY-MM-DD');
}

export const currentDate = Moment().format('YYYY-MM-DD');
