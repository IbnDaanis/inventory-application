import styled from 'styled-components/macro'

export const CategoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 1000px;
  max-width: 95%;
  height: 100%;
  margin: 0 auto;
`
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;
  border-radius: 3px;
  padding: 1rem 0.5rem;
  background: #333;
`

export const CategoryTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
`
