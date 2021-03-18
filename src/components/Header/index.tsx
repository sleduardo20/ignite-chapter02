import * as S from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
};
