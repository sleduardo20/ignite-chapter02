import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks';
import { GlobalStyles } from './styles/GlobalStyles';

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(
    false,
  );

  const handleOpenNewTranslationModalOpenModal = () => {
    setIsNewTranslationModalOpen(true);
  };

  const handleCloseNewTranslationModalOpenModal = () => {
    setIsNewTranslationModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTranslationModalOpenModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModalOpenModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
};
