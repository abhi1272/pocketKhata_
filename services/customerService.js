import { instance } from './instance';
import { ENDPOINT } from '../utils/constants';

export function getCustomer() {
  return fetch('https://om-agency-bk.vercel.app/api/v1/customer', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE5ODgyMDdkYTQ0Mjg4MjI3MjY5NjkiLCJpYXQiOjE2ODQxNjc1NzR9.YXgNovE-V9Hn8W9CBwqUsuOnQ_2lLg2hBbILJjHGA4A',
    },
  });
}
