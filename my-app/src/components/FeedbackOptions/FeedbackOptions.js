import React from "react";
import {
  FeedbackButton,
  FeedbackTitle,
} from "../FeedbackOptions/FeedbackOptions.styled";

const FeedbackOptions = ({ onClickButton, onShow }) => (
  <>
    <FeedbackTitle>Please live feedback</FeedbackTitle>
    <FeedbackButton
      type="button"
      onClick={() => {
        onShow();
        onClickButton("good");
      }}
    >
      Good
    </FeedbackButton>
    <FeedbackButton
      type="button"
      onClick={() => {
        onShow();
        onClickButton("neutral");
      }}
    >
      Neutral
    </FeedbackButton>
    <FeedbackButton
      type="button"
      onClick={() => {
        onShow();
        onClickButton("bad");
      }}
    >
      Bad
    </FeedbackButton>
  </>
);

export default FeedbackOptions;
