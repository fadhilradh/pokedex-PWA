import styled from "styled-components";

export const Container = styled.div`
   width: 50%;
   max-width: 258px;
   border-radius: 1.25rem;
   background-color: #22272e;
   height: 260px;
   border: 1px solid #444c56;
   display: flex;
   flex-direction: column;
   padding: 12px;
   align-items: flex-start;
   height: auto;
`;

export const PokemonID = styled.p`
   color: #adbac7;
   margin: 0;
`;

export const PokemonName = styled.p`
   color: #adbac7;
   margin: 0;
   font-weight: bold;
`;

export const PokemonImage = styled.img`
   height: 70%;
`;

export const TypesWrapper = styled.div`
   display: flex;
   gap: 0.5rem;
`;
