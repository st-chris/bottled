import React from 'react';
import './error-boundary.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className='err-img-overlay'>
          <div className='err-img-cont' />
          <div className='err-img-text'>Sorry this page is broken</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
