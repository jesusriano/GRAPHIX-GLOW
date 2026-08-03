import React from 'react';

export class ErrorBoundary extends (React.Component as any) {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error during rendering or resizing:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900/80 border border-cyan-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
            <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400 text-2xl font-bold">
              ⚠️
            </div>
            <h2 className="text-xl font-bold mb-2">Ajuste de Vista Detectado</h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              La interfaz se está readaptando al cambio de orientación o tamaño de pantalla. Hemos evitado que la pantalla quede en blanco.
            </p>
            {this.state.error && (
              <div className="bg-slate-950 p-3 rounded-xl border border-red-500/30 text-left text-xs font-mono text-red-300 mb-6 max-h-32 overflow-auto">
                {this.state.error.toString()}
              </div>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Restaurar Vista
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
