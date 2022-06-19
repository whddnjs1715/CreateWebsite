import axios from 'axios';

export const apiRequest = () => {
  axios
    .get('https://codingapple1.github.io/shop/data2.json')
    .then((data) => {
      console.log(data.data);
    })
    .catch(() => {
      console.log('fail2!!!!!!!');
    });
};
