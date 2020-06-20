import React, { Component, Fragment } from "react";

import { colors } from "../utils/helpers";
import PropTypes from "prop-types";
import { Header, Button } from "semantic-ui-react";

import { Redirect } from "react-router-dom";

export class PollTeaser extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    unanswered: PropTypes.bool.isRequired,
  };
  state = {
    viewPoll: false,
  };
  handleClick = (e) => {
    this.setState((prevState) => ({
      viewPoll: !prevState.viewPoll,
    }));
  };
  render() {
    const { question, unanswered } = this.props;
    const buttonColor = unanswered === true ? colors.green : colors.blue;
    const buttonContent = unanswered === true ? "Answer Poll" : "Results";

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <Fragment>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: "center" }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <Button
          color={buttonColor.name}
          size="tiny"
          fluid
          onClick={this.handleClick}
          content={buttonContent}
        />
      </Fragment>
    );
  }
}

export default PollTeaser;
