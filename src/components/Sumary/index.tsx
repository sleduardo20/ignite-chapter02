import * as S from './styles';

import icomeInput from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTrasactions } from '../../hooks';

export const Summary = () => {
  const { transactions } = useTrasactions();

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeInput} alt="Entradas" />
        </header>
        <strong>R$ 100000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>R$ -7000</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 3000</strong>
      </div>
    </S.Container>
  );
};
