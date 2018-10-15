import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  render() {
    {
      /*let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary"; */
    }
    return (
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        {/*<span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
          </span> */}
        {/*<span style={{ fontSize: 100 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>*/}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
