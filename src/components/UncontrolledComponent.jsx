import React from "react";

class UncrolledComponent extends React.Component {
  inputRef = React.createRef();
  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>Send</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input element ...
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    console.log(this.inputRef.current.value);
  };
}

export default UncrolledComponent;
