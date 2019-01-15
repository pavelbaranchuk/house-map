import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia, IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
// import IconButton from '@material-ui/core/IconButton';

const styles = {
  media: {
    height: "15rem",
    // display: "flex"
    overflow: "hidden",


  },
  nextButton: {
    fontSize: "7rem",
    bottom: 0
  },
  previousButton: {
    fontSize: "7rem",
    bottom: 0,
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "2rem"
  }
};

const HouseImage = ({ classes, insider, src, description }) => (
  <CardMedia className={classes.media} image={src} title={description}>
    {insider.props.children}
    <div className={classes.buttons}>
      <div>
        <IconButton aria-label="Previous">
          <ArrowLeft className={classes.previousButton} />
        </IconButton>
        <IconButton aria-label="Next">
          <ArrowRight className={classes.nextButton} />
        </IconButton>
      </div>
    </div>
  </CardMedia>
);

HouseImage.propTypes = {
  classes: PropTypes.object,
  insider: PropTypes.object,
  src: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default withStyles(styles)(HouseImage);
