/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500">
          <p>Oops! Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
