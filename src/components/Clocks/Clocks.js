import React from "react";

import Led from "./Led";

import modules from "./Clocks.module.css";

class Clocks extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.updateTime(), 1000);
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

    {
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
  }

  render() {
    return (
      <div>
        <div className={modules.main}>
          {this.stringToNumber(this.props.time.getHours().toString(2)).map(
            val => (
              <Led value={val} />
            )
          )}
        </div>
        <div className={modules.main}>
        {this.stringToNumber(this.props.time.getMinutes().toString(2)).map(
          val => (
            <Led value={val} />
          )
        )}
        </div>
        <div className={modules.main}>
        {this.stringToNumber(this.props.time.getSeconds().toString(2)).map(
          val => (
            <Led value={val} />
          )
        )}
        </div>
       
      </div>
    );
  }
}

export default Clocks;
