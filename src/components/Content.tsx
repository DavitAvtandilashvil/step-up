import styled from "styled-components";
import shoes from "./../../data.json";

export default function Content() {
  return (
    <StyledContent>
      {shoes.map((item, index) => {
        return (
          <OneShoeContainer key={index}>
            <img src={item.shoe} alt="shoe" />
            <Price>{item.price}$</Price>
          </OneShoeContainer>
        );
      })}
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
  gap: 2.3rem;

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const OneShoeContainer = styled.div`
  position: relative;
  width: 34rem;
  & > img {
    width: 34rem;
    height: 34rem;
    border-radius: 1rem;
  }

  @media screen and (min-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    & > img {
      width: 20rem;
      height: 20rem;
    }
  }

  @media screen and (min-width: 1440px) {
    & > img {
      width: 40rem;
      height: 40rem;
    }
  }
`;

const Price = styled.p`
  position: absolute;
  top: 0;
  right: 1rem;
  font-size: 3.4rem;
  color: #ae6161;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;
