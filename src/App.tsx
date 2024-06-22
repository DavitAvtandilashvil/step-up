import styled from "styled-components";
import { GlobalStyles } from "./globals";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <StyledApp>
        <Header />
        <Content />
        <Footer />
      </StyledApp>
      <GlobalStyles />
    </>
  );
}

const StyledApp = styled.div``;
