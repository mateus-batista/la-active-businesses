/** @jsxImportSource @emotion/react */
import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { PageContent } from "../layout/PageContent";

export interface LoadingErrorProps {
  error: ApolloError | undefined;
}

export function LoadingError(props: LoadingErrorProps) {
  const { error } = props;
  return (
    <PageContent title="Snap!">
      <div
        css={css`
          align-self: center;
          text-align: center;
        `}
      >
        {error?.message || "Something went wrong, please try again later"}
      </div>
    </PageContent>
  );
}
