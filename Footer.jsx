import React, { Component } from "react";

const cardStyle = {
  width: "300px",
  margin: "0 auto",
  textAlign: "center",
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "5px",
};

class Footer extends Component {
  render() {
    return (
      <>
        <hr />
        <div style={cardStyle}>
          <h3>Contact</h3>

          <p>
            <b>Mobile:</b> 9595958454
          </p>
          <p>
            <b>Email:</b> sahyadri@gmail.com
          </p>
        </div>
      </>
    );
  }
}

export default Footer;