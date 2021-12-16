import React from "react";
import Notification from "../Notification";
import {
  List,
  ListItem,
  Title,
  Paragraph,
} from "../Statistics/Statistics.styled";

const Statistics = ({
  good,
  neutral,
  bad,
  state,
  oncountPositiveFeedbackPercentage,
  oncountTotalFeedback,
}) => (
  <React.Fragment>
    <Title>Statistics</Title>

    {state.visible ? (
      <List>
        <ListItem>
          <Paragraph>Good:{good} </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>Neutral:{neutral}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>Bad:{bad}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>Total:{oncountTotalFeedback(state)}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Positive feedback:{" "}
            {good === 0
              ? 0
              : oncountPositiveFeedbackPercentage(
                  (good * 100) / oncountTotalFeedback(state)
                )}{" "}
            %
          </Paragraph>
        </ListItem>
      </List>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </React.Fragment>
);

export default Statistics;
