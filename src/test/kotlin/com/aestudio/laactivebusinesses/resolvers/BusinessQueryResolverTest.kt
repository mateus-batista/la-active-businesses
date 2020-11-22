package com.aestudio.laactivebusinesses.resolvers

import com.aestudio.laactivebusinesses.model.Business
import com.aestudio.laactivebusinesses.service.ThirdPartyAPIService
import graphql.GraphqlErrorException
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import org.mockito.Mockito.mock
import java.time.LocalDate

internal class BusinessQueryResolverTest {

    private val thirdPartyAPIService: ThirdPartyAPIService = mock(ThirdPartyAPIService::class.java)

    private val businessQueryResolver = BusinessQueryResolver(thirdPartyAPIService)

    @Test
    fun `Should return business with most locations`() {
        `when`(thirdPartyAPIService.getActiveBusinesses()).thenReturn(this.getBusinessMock())

        val businessWithMostLocations = businessQueryResolver.businessWithMostLocations()

        assert(businessWithMostLocations?.size == 2)
    }

    @Test
    fun `Should throw GraphqlErrorException for null results for most businesses`() {
        `when`(thirdPartyAPIService.getActiveBusinesses()).thenReturn(null)

        assertThrows(GraphqlErrorException::class.java) { businessQueryResolver.businessWithMostLocations() }
    }

    @Test
    fun `Should return the oldest business`() {
        `when`(thirdPartyAPIService.getActiveBusinesses()).thenReturn(this.getBusinessMock())

        val oldestBusiness = businessQueryResolver.oldestBusiness()

        assert(oldestBusiness != null && oldestBusiness.name == "TEST 2")
    }

    @Test
    fun `Should throw GraphqlErrorException for null results for oldest business`() {
        `when`(thirdPartyAPIService.getActiveBusinesses()).thenReturn(null)

        assertThrows(GraphqlErrorException::class.java) { businessQueryResolver.oldestBusiness() }
    }

    private fun getBusinessMock(): Array<Business> {
        return arrayOf(
            Business(name = "TEST 1", address = "01, Test Street", city = "LA", zipCode = "LA0101", null, null, null),
            Business(name = "TEST 1", address = "01, Test Street", city = "LA", zipCode = "LA0101", null, null, null),
            Business(name = "TEST 2", address = "01, Test Street", city = "LA", zipCode = "LA0101", null, LocalDate.MIN, null),
            Business(name = "TEST 3", address = "01, Test Street", city = "LA", zipCode = "LA0101", null, LocalDate.MAX, null)
        )
    }
}