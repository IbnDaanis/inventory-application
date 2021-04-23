import styled from 'styled-components/macro'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background: rgb(30, 30, 30);
`

export const HeaderContainer = styled.nav`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 1010px) {
    padding: 0 10px;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
`
