import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
// thunk 함수는 createAsyncThunk 라는 툴킷 API를 사용해서 생성합니다.

// __가 함수 이름에 붙는 이유는 이 함수가 thunk 함수라는 것을 표시하기 위한
// 개인의 convention 입니다. 함수의 이름은 본인이 편한 이름으로 명명하세요.

export const __addNumber = createAsyncThunk(
  // 첫번째 인자: action value
  'addNumber',
  // 두번째 인자: 콜백함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = parseInt(state.number) + parseInt(action.payload);
    },

    minusNumber: (state, action) => {
      state.number = parseInt(state.number) - parseInt(action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
