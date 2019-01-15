import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";

import { connect } from "react-redux";
import { loadTemplate } from "../../store/actionCreators/templates";
import { loadHousesData } from "../../store/actionCreators/houses";

import Area from "../area/Area";
import Image from "../image/Image";
import Price from "../price/Price";
import Address from "../address/Address";

const styles = {
  houseWrapper: {
    marginTop: "5rem"
  }
};

const templateN = 0;
const houseN = 0;

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
      <>
        <Grid container justify="center" className={classes.houseWrapper}>
          <Card>
            <CardContent>
              {templates.response &&
                houses.response &&
                templates.response[templateN].template.map((item, i) => {
                  let child;
                  if (item.children) {
                    child = item.children;
                  }
                  return (
                    <div key={i}>
                      {item.component === "PRICE" && (
                        <Price
                          price={houses.response.data[houseN][item.field]}
                        />
                      )}
                      {item.component === "ADDRESS" && (
                        <Address
                          address={houses.response.data[houseN][item.field]}
                        />
                      )}
                      {item.component === "IMAGE" && (
                        <Image
                          src={houses.response.data[houseN][item.field][0]}
                          insider={
                            <div>
                              {child &&
                                child.map((subitem, k) => {
                                  return (
                                    <div key={k}>
                                      {subitem.component === "ADDRESS" && (
                                        <Address
                                          address={
                                            houses.response.data[houseN][
                                              subitem.field
                                            ]
                                          }
                                        />
                                      )}
                                      {subitem.component === "PRICE" && (
                                        <Price
                                          inner
                                          price={
                                            houses.response.data[houseN][
                                              subitem.field
                                            ]
                                          }
                                        />
                                      )}
                                      {subitem.component === "AREA" && (
                                        <Area
                                          area={
                                            houses.response.data[houseN][
                                              subitem.field
                                            ]
                                          }
                                        />
                                      )}
                                    </div>
                                  );
                                })}
                            </div>
                          }
                        />
                      )}
                      {item.component === "AREA" && (
                        <Area area={houses.response.data[houseN][item.field]} />
                      )}
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
