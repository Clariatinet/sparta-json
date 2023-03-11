import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. initialState
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// 완성된 Thunk 함수
export const __getTodos = createAsyncThunk(
  'todos/getTodos',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/todos');
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 2. reducer
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 3. export action creator
export const {} = todosSlice.actions;

// 4. export default
export default todosSlice.reducer;
