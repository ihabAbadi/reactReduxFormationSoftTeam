import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { functionMiddleware } from './redux-product/middlewares/ExempleMidlleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:[functionMiddleware]
});
