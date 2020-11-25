import React from "react";
import { gql, useQuery } from "@apollo/client";
import { OldestBusinessResult } from "../model/OldestBusinessResult";
import { BusinessContent } from "./BusinessContent";
import { LoadingIndicator } from "./loading/LoadingIndicator";
import { PageContent } from "./layout/PageContent";
import { LoadingError } from "./loading/LoadingError";

export function OldestBusinessView() {
  const { data, loading, error } = useQuery<OldestBusinessResult>(
    OLDEST_BUSINESS_QUERY,
    {
      fetchPolicy: "cache-first",
    }
  );

  if (data?.oldestBusiness) {
    return (
      <PageContent title="Oldest business">
        <BusinessContent business={data.oldestBusiness} />
      </PageContent>
    );
  } else if (loading) {
    return <LoadingIndicator />;
  } else {
    return <LoadingError error={error} />;
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
