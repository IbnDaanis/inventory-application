import styled from 'styled-components/macro'

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const ItemTitle = styled.h3`
  font-size: 1.2rem;
  min-width: 20%;
`

export const DeleteButton = styled.button`
  display: inline-block;
  margin-left: auto;
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  outline: 0;
  background: #f32819;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`
