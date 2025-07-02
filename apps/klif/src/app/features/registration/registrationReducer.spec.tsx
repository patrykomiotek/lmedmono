import { configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from './registrationSlice';
import {
  reset,
  decrement,
  increment,
  incrementByAmount,
} from './registrationSlice';

describe('registration reducer', () => {
  let store: ReturnType<typeof createTestStore>;

  const createTestStore = () => {
    return configureStore({
      reducer: {
        registration: registrationReducer,
      },
    });
  };

  beforeEach(() => {
    store = createTestStore();
  });

  it('should have set initial state', () => {
    const state = store.getState();

    expect(state.registration.value).toBe(5);
  });

  it('should increment by 1', () => {
    store.dispatch(increment()); // { type: 'registration/increment' }
    const state = store.getState();

    expect(state.registration.value).toBe(6);
  });

  it('should decrement twice', () => {
    // act, await
    store.dispatch(decrement());
    store.dispatch(decrement());

    const state = store.getState();

    expect(state.registration.value).toBe(3);
  });
});
