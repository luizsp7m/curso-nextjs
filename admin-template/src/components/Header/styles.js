import styled from 'styled-components';

export const Container = styled.div`
  height: 73px;
  border-bottom: 1px solid rgba(255, 255, 255, .05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: calc(100% - 73px);
  right: 0;

  padding: 0 3rem;

  background: ${({ theme }) => theme.colors.background };;

  > h4 {
    font-size: 1.35rem;
    color: ${({ theme }) => theme.colors.text };
    letter-spacing: .015rem;
    font-weight: 500;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  > img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`