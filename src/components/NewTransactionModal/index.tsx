import Modal from 'react-modal';

import * as S from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" type="number" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
