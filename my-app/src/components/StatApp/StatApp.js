import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions'
import Statistics from '../Statistics';
import Section from '../Section';




class StatApp extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      positiveFeedback: 0,
      visible: false
  };
  onShow = () => {
    this.setState({
      visible: true
    })
  }
    onClickGButton = () => {
        this.setState({
        good: this.state.good +1
      })
    };

    onClickNButton = () => {
        this.setState({
        neutral:this.state.neutral +1,
      })
    };

    onClickBButton = () => {
        this.setState({
        bad: this.state.bad +1
      })
    };
  countPositiveFeedbackPercentage = (value) => {
    return Math.trunc(value)
  };
  
  countTotalFeedback = (state) => {
    return Object.values(state).reduce((acc, value) => acc + value, 0)
  };
    render() {
        
      return (
        <Section title = ''>
        < FeedbackOptions
            onClickGButton={this.onClickGButton}
            onClickBButton={this.onClickBButton}
            onClickNButton={this.onClickNButton}
            onShow = {this.onShow}
          />
          
          < Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            state={this.state}
            oncountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            oncountTotalFeedback = {this.countTotalFeedback}
          />
          
          </Section>
    );
  }
}

export default StatApp;
