import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 50px 1.5fr 1fr 2fr 1fr 2fr;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #2e2e2e;
  width: 100%;
  max-width: 1000px;
  transition: all 200ms;
  padding: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #171718;
  }

  .name {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 4px;
  }

  h1 {
    font-size: 16px;
    margin: 0;
  }

  img {
    width: 40px;
  }

  span {
    text-transform: uppercase;
  }

  .red {
    color: #f00606;
  }

  .green {
    color: #13c783;
  }
`;
