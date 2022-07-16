import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// useState 역할
// state 하나를 slice라고 부름
const stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

// [
//   {id : 0, name : 'White and Black', count : 2},
//   {id : 2, name : 'Grey Yordan', count : 1}
// ]

export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});
