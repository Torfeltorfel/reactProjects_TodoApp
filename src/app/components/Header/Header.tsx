import styled from 'styled-components';

export default function Header(): JSX.Element {
  return (
    <div>
      <StyledHeader>todos</StyledHeader>
    </div>
  );
}

const StyledHeader = styled.h1`
  background-color: var(--black-700);
`;
