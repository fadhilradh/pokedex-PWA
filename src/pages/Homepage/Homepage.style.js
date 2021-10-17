import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eaeaea;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
`;

export const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;

  @media only screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const CardList = styled.main`
  padding: 16px 24px;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: auto auto auto;

  @media only screen and (max-width: 750px) {
    grid-template-columns: auto auto;
  }
`;
