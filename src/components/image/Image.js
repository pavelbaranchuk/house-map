import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const styles = {
  media: {
    height: 200,
    width: 200,
    zIndex: 0
  }
};

const Image = ({ classes, insider, src }) => (
  <CardMedia className={classes.media} image={src} title="House Image">
    {insider.props.children}
  </CardMedia>
);

Image.propTypes = {
  classes: PropTypes.object,
  insider: PropTypes.object,
  src: PropTypes.object.isRequired
};

export default withStyles(styles)(Image);
