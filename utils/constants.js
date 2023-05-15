export let TITLE = 'pocketkhata';

export const BACKEND_URL_LOCAL = 'http://localhost:4000/api/v1/';
export const BACKEND_URL_PROD = 'https://om-agency-bk.vercel.app/api/v1/';

export const RANGES = [
  {
    value: [new Date(), new Date()],
    label: 'Today'
  },
  {
    value: [new Date(new Date().setDate(new Date().getDate() - 1)), new Date()],
    label: 'Yesterday'
  },
  {
    value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
    label: 'Last 7 Days'
  },
  {
    value: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date()],
    label: 'Last 30 Days'
  },
  {
    value: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    label: 'This Month'
  },
  {
    value: [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0)
    ],
    label: 'Last Month'
  }
];


export const COLORS = {
  PRIMARY: '#780000',
  PRIMARY2:'#c1121f',
  PRIMARY_LIGHT:'#FDD5D7',
  SECONDARY:'#003049',
  SECONDARY2:'#669bbc',
  GREEN:'#00A86B',
  GREEN_LIGHT:'#CFFAEA',
  LIGHT:'#FCFCFC',
  LIGHT2:'#fdf0d5',
  TEXT_DARK:'#292B2D',
  TEXT_LIGHT: '#91919F'
}

export const ENDPOINT = {
  GET_CUSTOMER: '/customer'
}