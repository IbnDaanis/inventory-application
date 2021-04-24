import styled from 'styled-components/macro'

export const AddItemWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 10000;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

export const AddItemFormEl = styled.form`
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
