import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eaeaea;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${(props) => (props.bookmark ? "center" : "space-between")};
  align-items: center;
  width: 620px;

  @media only screen and (max-width: 750px) {
    width: 410px;
  }

  @media only screen and (max-width: 450px) {
    width: 360px;
  }
`;

export const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
  }
  margin-right: ${(props) => (props.bookmark ? "auto" : "0")}; ;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-right: auto;
  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const CardList = styled.main`
  padding: 16px 24px;
  display: grid;

  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: auto auto auto;

  direction: ltr;

  @media only screen and (max-width: 750px) {
    grid-template-columns: auto auto;
  }
`;
