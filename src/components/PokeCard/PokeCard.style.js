import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   border-radius: 1.25rem;
   background-color: #22272e;
   min-height: 260px;
   border: 1px solid #444c56;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 0.75rem;
   height: auto;

   &:hover {
      filter: brightness(120%);
      cursor: pointer;
   }
`;

export const PokemonImage = styled.img`
   width: 100%;
   max-width: 150px;
   height: 100%;
   max-height: 150px;
   margin: 0 auto;
`;

export const DetailWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
`;

export const PokemonID = styled.p`
   color: #adbac7;
   margin: 0;
`;

export const PokemonName = styled.p`
   color: #adbac7;
   margin: 0;
   font-weight: bold;
   text-transform: capitalize;
`;

export const TypesWrapper = styled.div`
   display: flex;
   gap: 0.5rem;
`;
