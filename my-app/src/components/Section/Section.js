import { Wrapper, Title } from "../Section/Section.styled";

const Section = ({ title, children }) => (
  <Wrapper>
    <Title> {title} </Title>
    {children}
  </Wrapper>
);

export default Section;
