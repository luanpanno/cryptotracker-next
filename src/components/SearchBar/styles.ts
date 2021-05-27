import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  input {
    background-color: #222531;
    color: #e2e2e2;
    border: none;
    padding: 12px 16px;
    border-radius: 4px;
    outline: none;
    height: 100%;
    width: 100%;

    &::placeholder {
      color: #e2e2e2;
    }
  }
`;
