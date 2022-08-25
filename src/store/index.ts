import { configureStore } from '@reduxjs/toolkit';
import {appliedLoanReducer} from '../screens/loans-tab/appliedLoanSlice';

export const store = configureStore({
  reducer: {
	appliedLoan: appliedLoanReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;