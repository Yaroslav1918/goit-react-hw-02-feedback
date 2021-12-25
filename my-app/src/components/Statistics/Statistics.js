import React from "react";
import Notification from "../Notification";
import {
  StatList,
  StatItem,
  StatTitle,
  StatParagraph,
} from "../Statistics/Statistics.styled";

const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  state,
  oncountPositiveFeedbackPercentage,
  oncountTotalFeedback,
}) => (
  <React.Fragment>
    <StatTitle>Statistics</StatTitle>

    {state.visible ? (
      <StatList>
        <StatItem>
          <StatParagraph>Good:{goodValue} </StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Neutral:{neutralValue}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Bad:{badValue}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Total:{oncountTotalFeedback(state)}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>
            Positive feedback:{" "}
            {goodValue === 0
              ? 0
              : oncountPositiveFeedbackPercentage(
                  (goodValue * 100) / oncountTotalFeedback(state)
                )}{" "}
            %
          </StatParagraph>
        </StatItem>
      </StatList>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </React.Fragment>
);

export default Statistics;
