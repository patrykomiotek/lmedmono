import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Button } from '@erezerwacja/common-ui';

import { decrement, increment } from './registrationSlice';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.registration.value);
  // const state = useSelector((state: RootState) => state.registration.value)
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Value: {count}</h1>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
    </div>
  );
}
