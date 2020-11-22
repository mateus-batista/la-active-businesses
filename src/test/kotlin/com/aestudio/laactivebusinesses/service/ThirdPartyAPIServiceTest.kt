package com.aestudio.laactivebusinesses.service

import com.aestudio.laactivebusinesses.config.properties.ThirdPartyProperties
import com.aestudio.laactivebusinesses.model.Business
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.mockito.Mockito.mock
import org.springframework.http.ResponseEntity
import org.springframework.web.client.RestClientException
import org.springframework.web.client.RestTemplate
import java.util.Optional

internal class ThirdPartyAPIServiceTest {

    private val thirdPartyProperties = ThirdPartyProperties(activeBusinesses = "http://teste.com")

    private val restTemplate: RestTemplate = mock(RestTemplate::class.java)

    private val thirdPartyAPIService = ThirdPartyAPIService(thirdPartyProperties, restTemplate)

    @Test
    fun `Should return an empty array`() {
        Mockito.`when`(restTemplate.getForEntity(thirdPartyProperties.activeBusinesses, Array<Business>::class.java))
            .thenReturn(ResponseEntity.of(Optional.of(emptyArray())))

        val activeBusinesses = this.thirdPartyAPIService.getActiveBusinesses()

        assert(activeBusinesses?.size == 0)
    }

    @Test
    fun `Should return null`() {
        Mockito.`when`(restTemplate.getForEntity(thirdPartyProperties.activeBusinesses, Array<Business>::class.java))
            .thenThrow(RestClientException(""))

        val activeBusinesses = this.thirdPartyAPIService.getActiveBusinesses()

        assert(activeBusinesses == null)
    }
}