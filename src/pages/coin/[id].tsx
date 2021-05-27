import { GetServerSideProps } from 'next';
import React from 'react';
import { Layout } from '../../components/Layout';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    padding: 24px 64px;
    border-radius: 4px;
    gap: 24px;

    img {
      height: 120px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      h1 {
        margin: 0;
      }

      p {
        margin: 0;
      }
    }

    & > p {
      font-size: 1.2rem;
    }
  }
`;

const CoinPage = ({ coin }) => {
  return (
    <Layout>
      <Container>
        <div>
          <img src={coin?.image.large} alt={coin?.name} />
          <div>
            <h1>{coin?.name}</h1>
            <p>{coin?.symbol}</p>
          </div>
          <p>$ {coin?.market_data.current_price.usd.toLocaleString()}</p>
        </div>
      </Container>
    </Layout>
  );
};

export default CoinPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coin = await res.json();

  return {
    props: {
      coin,
    },
  };
};
