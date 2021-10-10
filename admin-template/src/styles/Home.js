import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;

  > h3 {
    color: ${({ theme }) => theme.colors.text };
  }
`;
