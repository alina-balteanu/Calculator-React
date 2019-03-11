import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="buttons-wrapper">
        <button
          id="clear"
          className="buttons"
          value="AC"
          onClick={this.props.clearVal}
        >
          AC
        </button>
        <button
          id="divide"
          className="buttons"
          value="/"
          onClick={() => this.props.performOp("/")}
        >
          /
        </button>
        <button
          id="multiply"
          className="buttons"
          value="x"
          onClick={() => this.props.performOp("*")}
        >
          x
        </button>
        <button
          id="seven"
          className="buttons nbr"
          value="7"
          onClick={this.props.typeNumbers}
        >
          7
        </button>
        <button
          id="eight"
          className="buttons nbr"
          value="8"
          onClick={this.props.typeNumbers}
        >
          8
        </button>
        <button
          id="nine"
          className="buttons nbr"
          value="9"
          onClick={this.props.typeNumbers}
        >
          9
        </button>
        <button
          id="substract"
          className="buttons"
          value="-"
          onClick={() => this.props.performOp("-")}
        >
          -
        </button>
        <button
          id="four"
          className="buttons nbr"
          value="4"
          onClick={this.props.typeNumbers}
        >
          4
        </button>
        <button
          id="five"
          className="buttons nbr"
          value="5"
          onClick={this.props.typeNumbers}
        >
          5
        </button>
        <button
          id="six"
          className="buttons nbr"
          value="6"
          onClick={this.props.typeNumbers}
        >
          6
        </button>
        <button
          id="add"
          className="buttons"
          value="+"
          onClick={() => this.props.performOp("+")}
        >
          +
        </button>
        <button
          id="one"
          className="buttons nbr"
          value="1"
          onClick={this.props.typeNumbers}
        >
          1
        </button>
        <button
          id="two"
          className="buttons nbr"
          value="2"
          onClick={this.props.typeNumbers}
        >
          2
        </button>
        <button
          id="three"
          className="buttons nbr"
          value="3"
          onClick={this.props.typeNumbers}
        >
          3
        </button>
        <button
          id="zero"
          className="buttons nbr"
          value="0"
          onClick={this.props.typeNumbers}
        >
          0
        </button>
        <button
          id="decimal"
          className="buttons"
          value="."
          onClick={this.props.handleDot}
        >
          .
        </button>
        <button
          id="equals"
          className="buttons"
          value="="
          onClick={this.props.handleEquals}
        >
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
