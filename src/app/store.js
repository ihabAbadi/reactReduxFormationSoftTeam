import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from '../features/counter/counterSlice';
import { functionMiddleware } from './redux-product/middlewares/ExempleMidlleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:[thunk]
});
