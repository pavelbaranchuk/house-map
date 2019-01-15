import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  housePrice: {
    fontWeight: "bold",
    margin: "0.5rem",
  },
  inner: {
    fontSize: "1.5rem",
    padding: "0.5rem",
    background: "rgba(255, 255, 255, 0.4)",
    display: "inline",
    borderRadius: "1rem"
  }
};

const HousePrice = ({ classes, price, inner }) => (
  <Typography
    component="p"
    className={inner ? classes.inner : classes.housePrice}
  >
    {price && `$${price}`}
  </Typography>
);

HousePrice.propTypes = {
  classes: PropTypes.object,
  price: PropTypes.string.isRequired,
  inner: PropTypes.bool
};

export default withStyles(styles)(HousePrice);
