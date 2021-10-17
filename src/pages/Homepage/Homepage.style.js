import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1c2128;
`;

export const PageTitle = styled.h1`
  color: #cdd9e5;
  font-size: 2.5rem;
  text-align: center;

  @media only screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const CardList = styled.div`
  padding: 16px 24px;
  display: grid;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  grid-template-columns: auto auto auto;

  @media only screen and (max-width: 750px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: auto;
    grid-gap: 10px 10px;
  }
`;
