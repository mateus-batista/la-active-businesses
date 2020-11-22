package com.aestudio.laactivebusinesses.resolvers

import com.aestudio.laactivebusinesses.config.graphql.getOrThrowGraphQLError
import com.aestudio.laactivebusinesses.model.Business
import com.aestudio.laactivebusinesses.service.ThirdPartyAPIService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class BusinessQueryResolver(val thirdPartyAPIService: ThirdPartyAPIService) : GraphQLQueryResolver {

    fun businessWithMostLocations(): List<Business>? {
        return this.thirdPartyAPIService.getActiveBusinesses().getOrThrowGraphQLError { list ->
            list
                .groupBy { it.name }
                .maxByOrNull { it.value.size }
                ?.value
        }
    }

    fun oldestBusiness(): Business? {
        return this.thirdPartyAPIService.getActiveBusinesses().getOrThrowGraphQLError { list ->
            list.reduce { acc, business ->
                if (acc.startDate != null && business.startDate != null) {
                    if (acc.startDate.isBefore(business.startDate)) {
                        acc
                    } else {
                        business
                    }
                } else if (acc.startDate != null) {
                    acc
                } else {
                    business
                }
            }
        }
    }
}