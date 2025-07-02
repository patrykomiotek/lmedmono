import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from './features/registration/registrationSlice';
import { appointmentReducer } from './features/appointments/appointmentsSlice';

// instead of defining the reducers in the reducer field of configureStore, combine them here:
// const rootReducer = combineReducers({ registration: registrationReducer });

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    appointment: appointmentReducer,
    // service: serviceReducer,

    // reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(yourMiddleware),
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
