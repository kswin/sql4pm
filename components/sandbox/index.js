import React from "react";

import "./style.css";

class Sandbox extends React.Component {
  render() {
    return (
      <div className="Sandbox">
        <div className="Sandbox__db">
          {this.props.rows && <table className="table">
            {this.props.rows.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>
                <td>{row.log}</td>
              </tr>))}
          </table>}
        </div>
        <div className="Sandbox__schema">
        </div>
        <div className="Sandbox__codepen">
        </div>
        <div className="Sandbox__results">
        </div>
      </div>
    );
  }
}

export default Sandbox;
