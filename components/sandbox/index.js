import React      from "react";
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/sql/sql');

import "./style.css";

class Sandbox extends React.Component {
  constructor() {
    super();
    this.state = { sql: '', results: []};
  }

  get columns() {
    return this.props.rows.length
      ? Object.keys(this.props.rows[0])
      : [];
  }

  get resultCols() {
    return this.state.results.length
      ? Object.keys(this.state.results[0])
      : [];
  }

  render() {
    return (
      <div className="Sandbox">
        <div className="Sandbox__db half">
          <div className="Sandbox__schema">
            <h2>Schema</h2>
            <pre>{this.props.schema}</pre>
          </div>
          <div>
            <h2>Movies</h2>
            {this.props.rows && <table className="Sandbox__table">
              <thead>
                <tr>
                  {this.columns.map((header, i) => <th key={i}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {this.props.rows.map((row, i) =>
                  <tr key={`row-${i}`}>
                    {Object.values(row).map((value, i) =>
                      <td key={`cell-${i}`}>{value}</td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>}
          </div>
        </div>
        <div className="Sandbox__playground half">
          <div className="Sandbox__codepen">
            <h2>Code</h2>
            <CodeMirror
              autoFocus={true}
              value={this.state.sql}
              options={{
                mode: 'text/x-sql',
                lineNumbers: true,
                smartIndent: true,
                indentWithTabs: true,
                autofocus: true
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ sql: value })
              }}
            />
            <button onClick={() => {
              this.props.db.transaction(tx => {
                tx.executeSql(this.state.sql, [], (_, { rows }) => {
                  this.setState({ results: Array.from(rows) });
                });
              }, err => alert(err.message));
            }}>Submit</button>
            <button onClick={() => {
              this.setState({ sql: '', results: [] });
            }}>Clear</button>
          </div>
          <div className="Sandbox__results">
            <h2>Results</h2>
            {this.state.results && <table className="Sandbox__table">
                <thead>
                  <tr>
                    {this.resultCols.map((header, i) => <th key={i}>{header}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {this.state.results.map((row, i) =>
                    <tr key={`row-${i}`}>
                      {Object.values(row).map((value, i) =>
                        <td key={`cell-${i}`}>{value}</td>
                      )}
                    </tr>
                  )}
                </tbody>
              </table>}
          </div>
        </div>
      </div>
    );
  }
}

export default Sandbox;
