import { useState } from 'react';
import Modal from 'react-modal';

import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';

import * as S from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImage} alt="Fechar Modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />

        <S.TrasactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImage} alt="Entrada" /> <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImage} alt="Saida" /> <span>Saida</span>
          </S.RadioBox>
        </S.TrasactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
