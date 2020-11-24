/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../layout/Title";

export function LoadingIndicator() {
  return (
    <div
      css={css`
        position: absolute;
        top: 30vh;
        left: 50vw;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <FontAwesomeIcon icon={faSpinner} spin size="2x" color=" #0f2940" />
        <Title>Loading</Title>
      </div>
    </div>
  );
}
