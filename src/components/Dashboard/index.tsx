import * as S from './styles';

import { Summary } from '../Sumary';
import { TransactionTable } from '../TransactionsTable';

export const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  );
};
