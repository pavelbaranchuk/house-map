import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";

import { connect } from "react-redux";
import { loadTemplate } from "../../store/actionCreators/templates";

import Area from "../area/Area";
import Image from "../image/Image";
import Price from "../price/Price";
import Address from "../address/Address";

const styles = {
  houseWrapper: {
    marginTop: "5rem"
  }
};

class HouseMap extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    templates: PropTypes.object.isRequired,
    loadTemplate: PropTypes.func
  };

  componentDidMount() {
    this.props.loadTemplate();
  }

  render() {
    const { classes, templates } = this.props;

    return (
      <>
        <Grid container justify="center" className={classes.houseWrapper}>
          <Card>
            <CardContent>
              {templates.response &&
                this.props.templates.response[0].template.map((item, i) => {
                  let child;

                  if (item.children) {
                    child = item.children;
                  }
                  return (
                    <div key={i}>
                      {item.component === "PRICE" && (
                        <Price price={item.field} />
                      )}
                      {item.component === "ADDRESS" && (
                        <Address address={item.field} />
                      )}
                      {item.component === "IMAGE" && (
                        <Image
                          src={item.field}
                          insider={
                            <div>
                              {child &&
                                child.map((subitem, k) => {
                                  return (
                                    <div key={k}>
                                      {subitem.component === "ADDRESS" && (
                                        <Address address={subitem.field} />
                                      )}
                                      {subitem.component === "PRICE" && (
                                        <Price price={subitem.field} />
                                      )}
                                      {subitem.component === "AREA" && (
                                        <Area area={subitem.field} />
                                      )}
                                    </div>
                                  );
                                })}
                            </div>
                          }
                        />
                      )}
                      {item.component === "AREA" && <Area area={item.field} />}
                    </div>
                  );
                })}
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispatchToProps = {
  loadTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HouseMap));
