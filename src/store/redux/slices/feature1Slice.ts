import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Feature1State {
  count: number;
}

const initialState: Feature1State = {
  count: 3,
};

const feature1Slice = createSlice({
  name: 'feature1',
  initialState,
  reducers: {
    increment(state) {
      return { ...state, count: state.count + 1 };
    },
    decrement(state) {
      return { ...state, count: state.count - 1 };
    },
    setCount(state, action: PayloadAction<number>) {
      return { ...state, count: action.payload };
    },
  },
});

export const { increment, decrement, setCount } = feature1Slice.actions;
export default feature1Slice.reducer;
