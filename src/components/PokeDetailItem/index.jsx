import PropTypes from "prop-types";

import { DetailWrapper, Property, Value } from "./PokeDetailItem.style";

const PokeDetailItem = ({ property, value }) => {
  return (
    <DetailWrapper>
      <Property>{property}</Property>
      <Value>{value}</Value>
    </DetailWrapper>
  );
};

PokeDetailItem.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PokeDetailItem;
