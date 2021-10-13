import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeNumber(event) {
    this.setState({ number: event.target.value });
  }

  render() {
    return (
      <div id="footer">
        <div className="container">
          <input
            value={this.state.name}
            onChange={this.handleChangeName}
            className="inputName"
            placeholder="Name..."
            type="text"
          />
          <input
            value={this.state.number}
            onChange={this.handleChangeNumber}
            className="inputNumber"
            onWheel={(e) => e.target.blur()}
            placeholder="Number..."
            type="number"
          />
        </div>
        <div
          onClick={() =>
            this.props.createContact(this.state.name, this.state.number)
          }
          id="btn"
        >
          Add new contact
        </div>
      </div>
    );
  }
}
