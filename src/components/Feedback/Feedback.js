import React, { Component } from "react";
import Buttons from "./Buttons";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Panel from "./Panel";
import s from "./Statistics.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increaseItems = (value) => {
    this.setState((prevState) => {
      return { [value.toLowerCase()]: prevState[value.toLowerCase()] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    this.countTotalFeedback();
    if (this.countTotalFeedback() === 0) {
      return this.state.good * 100;
    } else {
      return Math.floor((this.state.good * 100) / this.countTotalFeedback());
    }
  };
  render() {
    const { good, neutral, bad } = this.state;
    let persentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={s.container}>
        <Buttons
          increaseItems={this.increaseItems}
          options={[
            { value: "Good", id: "id-1" },
            { value: "Neutral", id: "id-2" },
            { value: "Bad", id: "id-3" },
          ]}
        />
        <Panel title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              persentage={persentage}
            />
          )}
        </Panel>
      </div>
    );
  }
}

export default Feedback;
