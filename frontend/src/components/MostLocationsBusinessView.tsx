import { gql, useQuery } from "@apollo/client";
import React from "react";
import { BusinessWithMostLocationsResult } from "../model/MostLocationsBusinessResult";
import { BusinessContent } from "./BusinessContent";
import { PageContent } from "./layout/PageContent";
import { LoadingError } from "./loading/LoadingError";
import { LoadingIndicator } from "./loading/LoadingIndicator";

export function MostLocationBusinessView() {
  const { data, loading, error } = useQuery<BusinessWithMostLocationsResult>(
    MOST_LOCATION_BUSINESS_QUERY,
    {
      fetchPolicy: "cache-first",
    }
  );

  if (data?.businessWithMostLocations) {
    return (
      <PageContent title="Business with most locations">
        <BusinessContent business={data.businessWithMostLocations} />
      </PageContent>
    );
  } else if (loading) {
    return <LoadingIndicator />;
  } else {
    return <LoadingError error={error} />;
  }
}

const MOST_LOCATION_BUSINESS_QUERY = gql`
  query BusinessWithMostLocations {
    businessWithMostLocations {
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
