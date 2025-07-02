import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { Provider } from 'react-redux';

import { store } from '../app/store';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(
      getAllByText(new RegExp('Welcome @erezerwacja/klif', 'gi')).length > 0
    ).toBeTruthy();
  });
});
