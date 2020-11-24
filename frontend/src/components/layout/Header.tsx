/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../config/routes";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const location = useLocation();

  const now = new Date();

  return (
    <div css={styles.container}>
      <div>
        {routes
          .filter((route) => location.pathname.includes(route.path))
          .map((route, idx) => (
            <Link key={route.path} css={styles.link} to={route.path}>
              {idx > 0 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="sm"
                  css={styles.icon}
                />
              )}
              {route.breadcrumb}
            </Link>
          ))}
      </div>
      <div css={styles.date}>{now.toDateString()}</div>
    </div>
  );
}

const styles = {
  container: css`
    grid-area: header;
    background-color: #0f2940;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  `,
  link: css`
    color: white;
    margin: 0 0.25rem;
    font-size: 0.75rem;
    text-decoration: none;
  `,
  icon: css`
    margin-right: 0.25rem;
  `,
  date: css`
    font-size: 0.75rem;
    color: white;
  `,
};
