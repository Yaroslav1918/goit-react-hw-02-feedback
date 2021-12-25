import React from "react";
import PropTypes from "prop-types";
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
FeedbackOptions.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
export default FeedbackOptions;
