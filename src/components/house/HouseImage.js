import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia, IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

const styles = {
  media: {
    height: "15rem"
  },
  nextButton: {
    fontSize: "3rem",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    color: "black"

  },
  previousButton: {
    fontSize: "3rem",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    color: "black"
  },
  previousWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: "18rem",
    borderRadius: 0,
  },
  nextWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "16.5rem",
    right: 0,
    borderRadius: 0
  },
  children: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "1rem 0.75rem"
  }
};

class HouseImage extends Component {
  static propTypes = {
    classes: PropTypes.object,
    insider: PropTypes.object,
    src: PropTypes.array.isRequired,
    description: PropTypes.string
  };

  state = {
    currentImage: 0
  }

  render() {
    const { classes, insider, src, description } = this.props;

    return (
      <CardMedia className={classes.media} image={src[this.state.currentImage]} title={description}>
        <div className={classes.children}>
          {insider.props.children}
        </div>

        {(src.length !== 1) &&
          <>
            <IconButton className={classes.previousWrapper} aria-label="Previous" onClick={this.handlePreviousClick}>
              <ArrowLeft className={classes.previousButton} />
            </IconButton>

            <IconButton className={classes.nextWrapper} aria-label="Next" onClick={this.handleNextClick}>
              <ArrowRight className={classes.nextButton} />
            </IconButton>
          </>}
      </CardMedia>
    )
  }

  handleNextClick = () => {
    const { currentImage } = this.state;
    if (currentImage === this.props.src.length - 1) {
      this.setState({ currentImage: 0 })
    } else {
      this.setState({ currentImage: currentImage + 1 })
    }
  }

  handlePreviousClick = () => {
    const { currentImage } = this.state;
    if (currentImage === 0) {
      this.setState({ currentImage: this.props.src.length - 1 })
    } else {
      this.setState({ currentImage: currentImage - 1 })
    }
  }
};

export default withStyles(styles)(HouseImage);
