import React          from 'react';
import * as SEED_DATA from '../seed_data';
import Sandbox        from '../components/sandbox';

import '../styles/colors.css';

const db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      users: [],
      watches: []
    };
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('DROP TABLE IF EXISTS movies');
      tx.executeSql(`CREATE TABLE movies${SEED_DATA.MOVIES.SCHEMA}`);
      SEED_DATA.MOVIES.VALUES.map(values =>
        tx.executeSql(`INSERT INTO movies (title, genre) VALUES ${values}`)
      );

      tx.executeSql('DROP TABLE IF EXISTS users');
      tx.executeSql(`CREATE TABLE users(${SEED_DATA.USERS.SCHEMA})`);
      SEED_DATA.USERS.VALUES.map(values =>
        tx.executeSql(`INSERT INTO users (first_name, last_name, email) VALUES ${values}`)
      );

      tx.executeSql('DROP TABLE IF EXISTS watches');
      tx.executeSql(`CREATE TABLE watches(${SEED_DATA.WATCHES.SCHEMA})`);
      SEED_DATA.WATCHES.VALUES.map(values =>
        tx.executeSql(`INSERT INTO watches (user_id, movie_id) VALUES ${values}`)
      );
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM movies', [], (_, { rows }) => {
        this.setState({ movies: Array.from(rows) });
      });
      tx.executeSql('SELECT * FROM users', [], (_, { rows }) => {
        this.setState({ users: Array.from(rows) });
      });
      tx.executeSql('SELECT * FROM watches', [], (_, { rows }) => {
        this.setState({ watches: Array.from(rows) });
      });
    });
  }

  render() {
    return <Sandbox
      tableName="Movies"
      rows={this.state.movies}
      schema={SEED_DATA.MOVIES.SCHEMA}
      db={db}
    />;
  }
}
