import React from "react";
import { gql, useQuery } from "@apollo/client";
import { OldestBusinessResult } from "../model/OldestBusinessResult";
import { BusinessContent } from "./BusinessContent";
import { LoadingIndicator } from "./loading/LoadingIndicator";
import { PageContent } from "./layout/PageContent";

export function OldestBusinessView() {
  const { data } = useQuery<OldestBusinessResult>(OLDEST_BUSINESS_QUERY, {
    fetchPolicy: "cache-first",
  });

  if (data?.oldestBusiness) {
    return (
      <PageContent title="Oldest business">
        <BusinessContent business={data.oldestBusiness} />
      </PageContent>
    );
  } else {
    return <LoadingIndicator />;
  }
}

const OLDEST_BUSINESS_QUERY = gql`
  query OldestBusiness {
    oldestBusiness {
      name
      address
      city
      startDate
      zipCode
      location {
        latitude
        longitude
      }
    }
  }
`;
