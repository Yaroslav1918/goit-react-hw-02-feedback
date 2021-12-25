import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import GlobalStyle from "../../Style/globalStyles";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positiveFeedback: 0,
    visible: false,
  };
  setValue = (key) => {
    this.setState((state) => ({
      [key]: state[key] + 1,
    }));
  };
  onShow = () => {
    this.setState({
      visible: true,
    });
  };
  countPositiveFeedbackPercentage = (value) => {
    return Math.trunc(value);
  };

  countTotalFeedback = (state) => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="">
          <FeedbackOptions onClickButton={this.setValue} onShow={this.onShow} />

          <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            state={this.state}
            oncountPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
            oncountTotalFeedback={this.countTotalFeedback}
          />
        </Section>
      </>
    );
  }
}

export default App;
