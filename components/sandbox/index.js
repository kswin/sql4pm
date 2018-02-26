import React      from "react";
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/sql/sql');

import "./style.css";

class SampleData extends React.Component{
  constructor() {
    super();
    this.state = { view: 'table' };
  }

  show = (view) => {
    this.setState({ view });
  }

  render() {
    return (<div className="SampleData half">
      <h2>{this.props.tableName}</h2>
      <button onClick={() => this.show('table')}>table</button>
      <button onClick={() => this.show('schema')}>schema</button>
      {this.state.view === 'table' && this.props.rows && <table className="Sandbox__table">
        <thead>
          <tr>
            {this.props.columns.map((header, i) => <th key={i}>{header}</th>)}
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
      {this.state.view === 'schema' && <pre>{this.props.schema}</pre>}
    </div>);
  }
}

const CodePen = props => (
  <div className="Sandbox__codepen half">
    <h2>Code</h2>
    <CodeMirror
      autoFocus={true}
      value={props.code}
      options={{
        mode: 'text/x-sql',
        lineNumbers: true,
        smartIndent: true,
        autofocus: true
      }}
      onBeforeChange={(editor, data, value) => props.onChange(value)}
    />
    <button onClick={props.submit}>Submit</button>
    <button onClick={props.reset}>Clear</button>
  </div>
);

class Sandbox extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
      output: []
    };
  }

  columns(rows) {
    return rows.length
      ? Object.keys(rows[0])
      : [];
  }

  reset = () => {
    this.setState({ code: '', output: [] });
  }

  submit = () => {
    this.props.db.transaction(tx => {
      tx.executeSql(this.state.code, [], (_, { rows }) => {
        this.setState({ output: Array.from(rows) });
      });
    }, err => alert(err.message));
  }

  onChange = (value) => {
    this.setState({ code: value })
  }

  render() {
    return (
      <div className="Sandbox">
        <div className="Sandbox__db">
          <SampleData
            tableName={this.props.tableName}
            schema={this.props.schema}
            columns={this.columns(this.props.rows)}
            rows={this.props.rows}
          />
          <CodePen
            code={this.state.code}
            onChange={this.onChange}
            submit={this.submit}
            reset={this.reset}
          />
        </div>
        <div className="Sandbox__results">
          <h2>Results</h2>
          <h3>Number of records: {this.state.output.length}</h3>
          {!this.state.output.length && 'Try running a query 🖖'}
          {this.state.output && <table className="Sandbox__table">
            <thead>
              <tr>
                {this.columns(this.state.output).map((header, i) => <th key={i}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.state.output.map((row, i) =>
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
    );
  }
}

export default Sandbox;
