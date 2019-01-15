import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const styles = {
  media: {
    height: "15rem",
    // display: "flex"
    overflow: "hidden"
  }
};

const HouseImage = ({ classes, insider, src, description }) => (
  <CardMedia className={classes.media} image={src} title={description}>
    {insider.props.children}
  </CardMedia>
);

HouseImage.propTypes = {
  classes: PropTypes.object,
  insider: PropTypes.object,
  src: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default withStyles(styles)(HouseImage);
