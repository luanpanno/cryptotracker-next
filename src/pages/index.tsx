import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CoinList } from '../components/CoinList';
import { Layout } from '../components/Layout';

import { SearchBar } from '../components/SearchBar';
import { Coin } from '../models/domain/Coin';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
`;

interface Props {
  coins: Coin[];
}

export default function Home({ coins }: Props) {
  const [search, setSearch] = useState('');

  function getAllCoins() {
    return coins?.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.toLocaleLowerCase());
  }

  return (
    <Layout>
      <Container>
        <SearchBar
          placeholder="Search for coins"
          onChange={handleSearchChange}
        />

        <CoinList coins={getAllCoins()} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const filteredCoins: Coin[] = await res.json();

  return {
    props: {
      coins: filteredCoins,
    },
  };
};
