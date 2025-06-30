import { Component, ErrorInfo } from 'react';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  isError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError');
    return { isError: true };
  }

  override componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // logger
    console.log('componentDidCatch');
  }

  override render() {
    if (this.state.isError) {
      // <button onClick={() => this.setState({ isError: false })}>Retry</button>
      return this.props.fallback ? this.props.fallback : <p>Error!</p>;
    }

    return this.props.children;
  }
}
