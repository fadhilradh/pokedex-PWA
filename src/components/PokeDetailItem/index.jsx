import { DetailWrapper, Property, Value } from "./PokeDetailItem.style";

const PokeDetailItem = ({ property, value }) => {
  return (
    <DetailWrapper>
      <Property>{property}</Property>
      <Value>{value}</Value>
    </DetailWrapper>
  );
};

export default PokeDetailItem;
