import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseArea: {
    marginTop: "0.5rem"
  }
};

const Area = ({ classes, area }) => (
  <Typography component="p" className={classes.houseArea}>
    {`${area} sqr. km.`}
  </Typography>
);

Area.propTypes = {
  classes: PropTypes.object,
  area: PropTypes.number.isRequired
};

export default withStyles(styles)(Area);
