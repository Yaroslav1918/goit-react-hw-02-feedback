import { Wrapper, SectionTitle } from "../Section/Section.styled";

const Section = ({ title, children }) => (
  <Wrapper>
    <SectionTitle> {title} </SectionTitle>
    {children}
  </Wrapper>
);

export default Section;
