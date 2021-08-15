import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6, b {
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
  :root {
    font-size: 16px;
  }
  body {

    color: ${(props) => props.theme.font.colors.grey700};
    font-family: ${(props) => props.theme.font.family};
    font-weight: 400;
    letter-spacing: 0px;

    p, span {
      color: ${(props) => props.theme.font.colors.grey600};
    }
    
    span {
      font-size: 14px;
    }
  }

  
  #root {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    @media screen and (min-width: 1024px) {
      overflow-y: auto;
    }
  }

    &::-webkit-scrollbar {
      width: 0.75rem;
    }
    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 0.5625rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.grey300};
      border-radius: 0.375rem;
    }
  
`;
