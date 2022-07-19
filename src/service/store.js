import { configureStore, createSlice } from '@reduxjs/toolkit';

// useState 역할
// state 하나를 slice라고 부름
// Redux의 state 변경하는 법
// - state 수정해주는 함수만들기
// 원할때 그 함수를 실행해달라고 store.js에 요청해야함
const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    changeName(state) {
      console.log(state[0].count);
    },
    changeName2() {},
  },
});

export let { changeName, changeName2 } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
