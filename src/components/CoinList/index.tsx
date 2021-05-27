import { Coin } from '../../models/domain/Coin';
import { CoinItem } from '../CoinItem';
import { Container } from './styles';

interface Props {
  coins: Coin[];
}

export const CoinList: React.FC<Props> = ({ coins }) => {
  return (
    <Container>
      {coins?.map((coin) => (
        <CoinItem key={coin?.id} coin={coin} />
      ))}
    </Container>
  );
};
