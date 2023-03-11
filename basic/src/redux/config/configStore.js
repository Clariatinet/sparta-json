import { configureStore } from '@reduxjs/toolkit';
import counter from '../modules/counterSlice';
import todos from '../modules/todosSlice';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
});

export default store;
