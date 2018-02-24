// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import Sandbox from "../components/sandbox";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

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
    const db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);

    db.transaction((tx) => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Movies (
          id integer PRIMARY KEY UNIQUE,
          first_name TEXT,
          last_name TEXT,
          email TEXT
        )
      `);
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Users (
          id integer PRIMARY KEY UNIQUE,
          first_name TEXT,
          last_name TEXT,
          email TEXT
        )
      `);
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Watches (
          user_id INTEGER,
          movie_id INTEGER
        )
      `);
    });

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Movies", [], (_, results) => {
        const movies = [];
        for (let i = 0; i < results.rows.length; i++) {
          movies.push(results.rows.item(i));
        }
        this.setState({ movies });
      }, null);

      tx.executeSql("SELECT * FROM Users", [], (_, results) => {
        const users = [];
        for (let i = 0; i < results.rows.length; i++) {
          users.push(results.rows.item(i));
        }
        this.setState({ users });
      }, null);

      tx.executeSql("SELECT * FROM Watches", [], (_, results) => {
        const watches = [];
        for (let i = 0; i < results.rows.length; i++) {
          watches.push(results.rows.item(i));
        }
        this.setState({ watches });
      }, null);
    });
  }

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <h3>Movies</h3>
          <Sandbox rows={this.state.movies} />

          <h3>Users</h3>
          <Sandbox rows={this.state.users} />

          <h3>Watches</h3>
          <Sandbox rows={this.state.watches} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
