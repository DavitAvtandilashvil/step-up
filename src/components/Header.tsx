import styled from "styled-components";
import logo from "/assets/logo.webp";

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <HeaderInfo>
        <Tel>+995 599 45 32 55</Tel>
        <Email>stepupshoes@gmail.com</Email>
      </HeaderInfo>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #26269b96;

  & > img {
    width: 12rem;
    height: 6rem;
    border-radius: 1rem;
  }

  @media screen and (min-width: 768px) {
    height: 9rem;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2.3rem;
  }
`;

const Tel = styled.p`
  font-size: 1.6rem;
  color: #2c445e;
`;

const Email = styled.p`
  font-size: 1.3rem;
  color: #27413eb8;
`;
