import { render, screen, fireEvent } from '@testing-library/react';

import { Counter } from './Counter';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Counter component', () => {
  it('should increase and decrease', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const valueElement = screen.getByText(/value: 5/i);

    expect(valueElement).toBeInTheDocument();

    fireEvent.click(screen.getByText(/decrement/i));

    expect(screen.getByText(/value: 4/i)).toBeInTheDocument();
  });
});
