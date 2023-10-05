import React, { Component } from "react";
import New from "../greeting/new.png";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img alt="No Image Found..." src={New} style={{ marginTop: "20px" }} />
    );
  }
}

export default FeelingProud;
