import React from "react";

import "./style.css";

class Sandbox extends React.Component {
  constructor() {
    super();
    this.state = { rows: [] };
  }

  componentDidMount() {
    const db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);

    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
      tx.executeSql("INSERT INTO LOGS (id, log) VALUES (1, 'foobar')");
      tx.executeSql("INSERT INTO LOGS (id, log) VALUES (2, 'logmsg')");
    });

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM LOGS", [], (_, results) => {
        const rows = [];
        for (let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i));
        }
        this.setState({ rows });
      }, null);
    });
  }

  render() {
    return (
      <div className="Sandbox">
        <div className="Sandbox__db">
          {this.state.rows && <table className="table">
            {this.state.rows.map((row, i) => (
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
