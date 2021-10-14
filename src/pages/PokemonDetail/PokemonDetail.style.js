import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   background: #1c2128;
`;

export const DetailPage = styled.div`
   max-width: 576px;
   width: 100%;
   background: #22272e;
`;

export const Header = styled.div`
   width: 100%;
   text-align: left;
   padding: 1rem;
`;

export const Preview = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
`;

export const PokemonImage = styled.img`
   margin: 0 auto;
`;

export const PokemonID = styled.p`
   color: #adbac7;
   margin: 0;
   font-size: 1rem;
   font-weight: bold;
`;

export const PokemonName = styled.p`
   color: #adbac7;
   margin: 0;
   text-transform: capitalize;
   font-size: 2rem;
`;

export const Detail = styled.div`
   border: 2px solid #444c56;
   background-color: #373e47;
   height: 50vh;
   border-radius: 2rem;
`;
