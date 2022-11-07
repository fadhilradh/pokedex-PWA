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
  property: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

PokeDetailItem.defaultProps = {
  property: "",
  value: "",
};

export default PokeDetailItem;
