import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { changeTemplate } from "../../store/actionCreators/templates";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  colorDefault: {
    backgroundColor: "#2196f3",
  },
  button: {
    backgroundColor: "#47b3ff",
  }
};

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    templates: PropTypes.object,
    changeTemplate: PropTypes.func
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.colorDefault}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Main
          </Typography>
            <Button color="inherit" className={classes.button} onClick={this.handleChangeTemplate}>Change template</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  };

  handleChangeTemplate = () => {
    const { templates, changeTemplate } = this.props;
    if (templates.tempNum === templates.structure.response.length - 1) {
      changeTemplate(0);
    } else {
      changeTemplate(templates.tempNum + 1);
    }
  }
}

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispatchToProps = {
  changeTemplate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));