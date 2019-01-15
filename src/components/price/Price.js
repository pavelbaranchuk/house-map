import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  housePrice: {
    fontWeight: "bold",
    margin: "0.5rem"
  },
  inner: {
    fontSize: "1.5rem",
    margin: "0.5rem"
  }
};

const Price = ({ classes, price, inner }) => (
  <Typography
    component="p"
    className={inner ? classes.inner : classes.housePrice}
  >
    {`$${price}`}
  </Typography>
);

Price.propTypes = {
  classes: PropTypes.object,
  price: PropTypes.number.isRequired,
  inner: PropTypes.bool
};

export default withStyles(styles)(Price);
