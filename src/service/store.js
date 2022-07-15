import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// useState 역할
// state 하나를 slice라고 부름
const user = createSlice({
  name: 'user',
  initialState: 'kim',
});

const stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

// [
//   {id : 0, name : 'White and Black', count : 2},
//   {id : 2, name : 'Grey Yordan', count : 1}
// ]

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
