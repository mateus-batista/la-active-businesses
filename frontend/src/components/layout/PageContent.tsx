/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { ReactNode } from "react";
import { Title } from "./Title";

export interface PageContentProps {
  title: string;
  children: ReactNode;
}

export function PageContent(props: PageContentProps) {
  const { title, children } = props;
  return (
    <div>
      <div
        css={css`
          height: 75px;
          display: flex;
          align-items: center;
          background-color: white;
        `}
      >
        <Title
          css={css`
            font-size: 1.5rem;
            margin: 0;
            width: 100vw;
          `}
        >
          {title}
        </Title>
      </div>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        {children}
      </div>
    </div>
  );
}
