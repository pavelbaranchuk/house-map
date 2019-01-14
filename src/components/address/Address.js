import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseAddress: {
    marginTop: "0.5rem"
  }
};

const Address = ({ classes, address }) => (
  <Typography component="p" className={classes.houseAddress}>
    {address}
  </Typography>
);

Address.propTypes = {
  classes: PropTypes.object,
  address: PropTypes.string.isRequired
};

export default withStyles(styles)(Address);
