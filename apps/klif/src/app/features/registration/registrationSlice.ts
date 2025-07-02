import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface RegistrationState {
  value: number;
}

// Define the initial state using that type
const initialState: RegistrationState = {
  value: 5,
};

export const registrationSlice = createSlice({
  name: 'registration',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    reset: () => initialState,

    increment: (state) => {
      state.value += 1;

      // return {
      //   ...state,
      //   value: state.value + 1
      // }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { reset, increment, decrement, incrementByAmount } =
  registrationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.registration.value;

export const registrationReducer = registrationSlice.reducer;
