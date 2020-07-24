import React from "react";

class Clocks extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  stringToNumber(string) {
    let a = [];
    for (let i = 0; i < string.length; i++) {
      a.push(Number(string[i]));
      console.log(typeof a[i]);
    }

    for (let i = 0; i < 6 - string.length; i++) {
      a.unshift(0);
    }

    return a;
  }

  render() {
    return (
      <div>
        <span>
          {this.stringToNumber(
            this.props.ClocksPage.time.getHours().toString(2)
          )}{" "}
          :{" "}
          {this.stringToNumber(
            this.props.ClocksPage.time.getMinutes().toString(2)
          )}{" "}
          :{" "}
          {this.stringToNumber(
            this.props.ClocksPage.time.getSeconds().toString(2)
          )}
        </span>
        <div>{1 + 2 ? <div>{1 + 2}</div> : <div>0</div>}</div>
      </div>
    );
  }
}
export default Clocks;
