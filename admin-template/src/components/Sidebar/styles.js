import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.sidebar};
  transition: background .25s;
  width: 73px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;

  > div.gradient {
    width: 73px;
    height: 73px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* border-bottom: 1px solid rgba(255, 255, 255, .05); */
  }

  > div.selected {
    background: #2c3e50;
  }

  > div.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 1.45rem 0;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      background: #2c3e50;
    }

    > span {
      font-size: 1rem;
    }
  }
`

export const Bottom = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 1.45rem 0;
    transition: background .25s;

    > .icon {
      color: #c0392b;
      transition: color .25s;
    }

    > span {
      color: #c0392b;
      font-size: 1rem;
      transition: color .25s;
    }

    &:hover {
      background: #c0392b;
      
      > .icon {
        color: #fff;
      }

      > span {
        color: #fafafa;
      }
    }
  }
`
