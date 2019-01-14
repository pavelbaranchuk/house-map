import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseArea: {
    marginTop: "0.5rem"
  }
};

const Area = ({ classes }) => (
  <Typography component="p" className={classes.houseArea}>
    9 sqr. km.
  </Typography>
);

Area.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Area);
