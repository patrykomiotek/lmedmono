import { act, renderHook } from '@testing-library/react';
import { useAuth } from './AuthContext';

describe('useAuth hook', () => {
  it('should change hook values', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBe(false);

    act(() => {
      result.current.logIn();
    });

    expect(result.current.isLogged).toBe(true);

    act(() => {
      result.current.logOut();
    });

    expect(result.current.isLogged).toBe(false);
  });
});
