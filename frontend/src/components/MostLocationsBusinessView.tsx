import { gql, useQuery } from "@apollo/client";
import React from "react";
import { BusinessWithMostLocationsResult } from "../model/MostLocationsBusinessResult";
import { BusinessContent } from "./BusinessContent";
import { PageContent } from "./layout/PageContent";
import { LoadingIndicator } from "./loading/LoadingIndicator";

export function MostLocationBusinessView() {
  const { data } = useQuery<BusinessWithMostLocationsResult>(
    MOST_LOCATION_BUSINESS_QUERY,
    {
      fetchPolicy: "cache-first",
    }
  );

  if (data?.businessWithMostLocations) {
    return (
      <PageContent title="Business with most locations">
        <BusinessContent business={data.businessWithMostLocations[0]} />
      </PageContent>
    );
  } else {
    return <LoadingIndicator />;
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
