
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong.</h1>
                    <div className="bg-slate-800 p-6 rounded-lg max-w-2xl w-full overflow-auto">
                        <h2 className="text-xl font-semibold mb-2 text-blue-400">Error:</h2>
                        <pre className="text-red-300 whitespace-pre-wrap mb-4 font-mono text-sm">
                            {this.state.error && this.state.error.toString()}
                        </pre>
                        <h2 className="text-xl font-semibold mb-2 text-blue-400">Component Stack:</h2>
                        <pre className="text-slate-400 whitespace-pre-wrap font-mono text-xs">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
