import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Button } from '@erezerwacja/common-ui';
import { store } from '../../store';

import { decrement, increment, incrementByAmount } from './registrationSlice';
import { useEffect, useState } from 'react';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.registration.value);
  // const state = useSelector((state: RootState) => state.registration.value)
  const dispatch = useAppDispatch();
  // const [render, setRender] = useState(0);

  // useEffect(() => {
  //   store.subscribe();
  //   setRender((value) => value + 1);
  // }, []);

  return (
    <div>
      <h1>Value: {count}</h1>
      <div className="space-x-2 ml-4">
        <Button onClick={() => dispatch(incrementByAmount(100))}>
          Increment by 100
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
      </div>
    </div>
  );
}
