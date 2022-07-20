import { configureStore } from '@reduxjs/toolkit';
import cart from './userSlice';

// useState 역할
// state 하나를 slice라고 부름
// Redux의 state 변경하는 법
// - state 수정해주는 함수만들기
// 원할때 그 함수를 실행해달라고 store.js에 요청해야함

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
