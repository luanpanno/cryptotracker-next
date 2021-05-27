import { HTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLInputElement> {}

export const SearchBar: React.FC<Props> = ({ ...props }) => {
  return (
    <Container>
      <input type="text" {...props} />
    </Container>
  );
};
