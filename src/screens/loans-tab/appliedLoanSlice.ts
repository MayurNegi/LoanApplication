import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RadioInput } from './LoansTab';

interface PersonalDetails {
	firstName: string;
	lastName: string;
	email: string;
	dob: string;
	phone: number;
}

interface Address {
	streetAddress: string;
	apartmentNumber: string;
	zipCode: string;
	state: string;
}

interface Identification {
	residentialProof: RadioInput;
	idNumber: string;
	idState: string;
}

export interface LoanState {
	personalDetails: PersonalDetails;
	address: Address,
	identification: Identification,
}

const initialState: LoanState[] = [];

export const appliedLoanSlice = createSlice({
  name: 'appliedLoan',
  initialState,
  reducers: {
    save: (state: LoanState, action) => {
		return [...state, action.payload];
    },
  },
})

export const { save } = appliedLoanSlice.actions;

export const appliedLoanActions = appliedLoanSlice.actions;
export const appliedLoanReducer = appliedLoanSlice.reducer;