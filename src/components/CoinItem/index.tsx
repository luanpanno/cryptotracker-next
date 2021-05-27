import { Coin } from '../../models/domain/Coin';
import { Container, Row } from './styles';

import Link from 'next/link';

interface Props {
  coin: Coin;
}

export const CoinItem: React.FC<Props> = ({ coin }) => {
  return (
    <Container>
      <Link href="/coin/[id" as={`/coin/${coin.id}`}>
        <Row>
          <img src={coin.image} alt={`coin-${coin.symbol}-image`} />
          <div className="name">
            <h1>{coin.name}</h1>
            <span>{coin.symbol}</span>
          </div>
          <p>$ {coin.current_price.toLocaleString()}</p>
          <p>$ {coin.total_volume.toLocaleString()}</p>

          {coin.price_change_percentage_24h < 0 ? (
            <p className="red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}

          <p>Mkt Cap: $ {coin.market_cap.toLocaleString()}</p>
        </Row>
      </Link>
    </Container>
  );
};
