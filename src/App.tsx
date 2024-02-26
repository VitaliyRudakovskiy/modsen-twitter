import AppRouter from '@/components/AppRouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import ThemeProvider from '@/providers/ThemeProvider';
import UserGateProvider from '@/providers/UserGateProvider';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <UserGateProvider>
          <AppRouter />
        </UserGateProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
