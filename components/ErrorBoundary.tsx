import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/Button';
import { AlertTriangle } from 'lucide-react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-wild-sand dark:bg-cod-gray text-center">
                    <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-xl max-w-md border border-red-500/20">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full">
                                <AlertTriangle className="text-red-500" size={48} />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-4 text-cod-gray dark:text-white">Something went wrong</h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            We're sorry, but the application encountered an unexpected error.
                        </p>
                        <div className="space-y-4">
                            <Button
                                onClick={() => window.location.reload()}
                                className="w-full"
                            >
                                Reload Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/'}
                                className="w-full"
                            >
                                Return Home
                            </Button>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 text-left bg-gray-100 dark:bg-black p-4 rounded-lg overflow-auto max-h-48">
                                <code className="text-xs text-red-600 font-mono">
                                    {this.state.error.toString()}
                                </code>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
