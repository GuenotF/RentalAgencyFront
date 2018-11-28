import React, { Component } from "react";
import { connect } from "react-redux";
// action
import getAgencyByCp from "./action/getAgencyByCp";

class ViewAgency extends Component {
  render() {
    console.log("eeeeeeeeeeeeeeeeeeee");

    return <div>cc</div>;
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = { getAgencyByCp };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAgency);
