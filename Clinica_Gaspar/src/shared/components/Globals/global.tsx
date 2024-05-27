import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      * {
        box-sizing: border-box;
        text-decoration: none;
      }
    `}
  />
);
