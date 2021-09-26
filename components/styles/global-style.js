import { Global, css } from "@emotion/react";

const dynamicStyles = (props) => css`
  html {
    font-size: 10px;
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  * {
    box-sizing: inherit;
    margin: 0;
  }

  body {
    font-family: ${(props) => props.theme.fontStack};
    font-weight: 400;
  }
`;

const GlobalStyle = (props) => <Global styles={dynamicStyles(props)} />;

export { GlobalStyle };
