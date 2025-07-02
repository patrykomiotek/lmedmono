import { store } from '../../store';
import {
  reset,
  decrement,
  increment,
  incrementByAmount,
} from './registrationSlice';

describe('registration reducer', () => {
  afterEach(() => {
    // TODO: reset after each test
    store.dispatch(reset());
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

  it('should decrement twice 2', () => {
    // act, await
    store.dispatch(decrement());
    store.dispatch(decrement());

    const state = store.getState();

    expect(state.registration.value).toBe(3);
  });
});
