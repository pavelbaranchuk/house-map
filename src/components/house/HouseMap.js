import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { loadTemplate } from "../../store/actionCreators/templates";
import { loadHousesData } from "../../store/actionCreators/houses";

import House from "./House"

const styles = {
  title: {
    margin: "2rem 0 2rem"
  },
  container: {
    margin: "7rem 0"
  }
};

class HouseMap extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    templates: PropTypes.object.isRequired,
    houses: PropTypes.object.isRequired,
    loadTemplate: PropTypes.func,
    loadHousesData: PropTypes.func
  };

  componentDidMount() {
    this.props.loadTemplate();
    this.props.loadHousesData();
  }

  render() {
    const { classes, templates, houses } = this.props;

    return (
      <div className={classes.container}>
        <Grid container spacing={32}>
          {templates.structure.length && houses.data && houses.data.map((item, i) => (

            <Grid key={houses.data[i].id} item lg={4} md={6} sm={12} xs={12}>
              <House template={templates.structure[templates.tempNum].template} data={houses.data[i]} />
            </Grid>

          ))}
        </Grid>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    templates: state.templates,
    houses: state.houses
  };
};

const mapDispatchToProps = {
  loadTemplate,
  loadHousesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HouseMap));