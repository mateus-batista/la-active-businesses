/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Title } from "./layout/Title";
import { PageContent } from "./layout/PageContent";

export function HomeView() {
  const history = useHistory();
  return (
    <PageContent title="Welcome">
      <div
        css={css`
          display: flex;
          align-self: center;
          justify-content: center;
        `}
      >
        <div
          css={styles.common}
          onClick={() => history.push("/most-locations")}
        >
          <FontAwesomeIcon icon={faCity} size="5x" color=" #0f2940" />
          <Title>Business with most locations</Title>
        </div>
        <div css={styles.common} onClick={() => history.push("/oldest")}>
          <FontAwesomeIcon icon={faLandmark} size="5x" color=" #0f2940" />
          <Title>Oldest business</Title>
        </div>
      </div>
    </PageContent>
  );
}

const styles = {
  common: css`
    cursor: pointer;
    margin: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
