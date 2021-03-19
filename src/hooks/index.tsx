import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TrasactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => void;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export const TransactionsProvider = ({
  children,
}: TrasactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTrasactions = () => {
  const context = useContext(TransactionContext);

  return context;
};
