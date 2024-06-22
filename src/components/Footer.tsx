import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Adress>
        About Us: address - Tbilisi, Georgia. Balanchivadze street 42a
      </Adress>
      <CopyRight>©STEP-UP</CopyRight>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #26269b96;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 3rem;
`;

const Adress = styled.p`
  font-size: 1.2rem;
  color: #25252b;

  @media screen and (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const CopyRight = styled.p`
  font-size: 1.4rem;
  color: #25252b;

  @media screen and (min-width: 768px) {
    font-size: 2.3rem;
  }
`;
