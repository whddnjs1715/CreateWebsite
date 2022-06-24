import axios from 'axios';

export const apiRequest = () => {
  return axios.get('https://codingapple1.github.io/shop/data2.json');
  // .then((response) => {
  //   //console.log(response.data);
  // })
  // .catch(() => {
  //   console.log('fail2!!!!!!!');
  // });
};
