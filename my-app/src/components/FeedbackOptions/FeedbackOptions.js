import React from "react";
import { StatisticsButton, Title } from "../Statistics/Statistics.styled";

const FeedbackOptions = ({
  onClickGButton,
  onClickBButton,
  onClickNButton,
  onShow,
}) => (
  <React.Fragment>
    <Title>Please live feedback</Title>
    <StatisticsButton
      type="button"
      onClick={() => {
        onShow();
        onClickGButton();
      }}
    >
      Good
    </StatisticsButton>
    <StatisticsButton
      type="button"
      onClick={() => {
        onShow();
        onClickNButton();
      }}
    >
      Neutral
    </StatisticsButton>
    <StatisticsButton
      type="button"
      onClick={() => {
        onShow();
        onClickBButton();
      }}
    >
      Bad
    </StatisticsButton>
  </React.Fragment>
);

export default FeedbackOptions;
