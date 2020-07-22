import React from "react";

class Clocks extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <span>
          {this.props.ClocksPage.time.getHours()} :{" "}
          {this.props.ClocksPage.time.getMinutes()} :{" "}
          {this.props.ClocksPage.time.getSeconds()}
        </span>
      </div>
    );
  }
}
export default Clocks;
