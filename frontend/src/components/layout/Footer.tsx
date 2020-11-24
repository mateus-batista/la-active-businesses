/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Footer() {
  return (
    <div
      css={css`
        grid-area: footer;
        background-color: #0f2940;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        color: white;
      `}
    >
      by Mateus Alfredo Batista for AE Studio
    </div>
  );
}
