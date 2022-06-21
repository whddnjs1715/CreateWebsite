import axios from 'axios';

export const apiRequest = () => {
  axios
    .get('https://codingapple1.github.io/shop/data2.json')
    .then((response) => {})
    .catch(() => {
      console.log('fail2!!!!!!!');
    });
};
