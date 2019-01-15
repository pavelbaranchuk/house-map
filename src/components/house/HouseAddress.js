import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseAddress: {
    padding: "0.5rem",
    // boxSizing: "content-box",
    height: "4rem",
    display: "flex",
    textAlign: "center",
    alignItems: "center"
  }
};

const HouseAddress = ({ classes, address }) => (
  <Typography component="p" className={classes.houseAddress}>
    {address && address}
  </Typography>
);

HouseAddress.propTypes = {
  classes: PropTypes.object,
  address: PropTypes.string.isRequired
};

export default withStyles(styles)(HouseAddress);
