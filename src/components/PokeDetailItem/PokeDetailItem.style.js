import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 1rem;
`;

export const Property = styled.dt`
  font-size: 1rem;
`;

export const Value = styled.dd`
  font-size: 1rem;
`;
