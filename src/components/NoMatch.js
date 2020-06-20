import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export class NoMatch extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">No Match 404 Error</Header>
        <p>Sorry, Page not found</p>
      </Container>
    );
  }
}

export default NoMatch;
