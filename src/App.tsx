import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
};
