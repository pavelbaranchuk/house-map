import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseAddress: {
    marginTop: "0.5rem"
  }
};

const Address = ({ classes }) => (
  <Typography component="p" className={classes.houseAddress}>
    Ukraine, Kharkov, Akademika Proskyury street, app.9, 61085
  </Typography>
);

Address.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Address);
