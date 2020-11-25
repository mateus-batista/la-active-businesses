package com.aestudio.laactivebusinesses.service

import com.aestudio.laactivebusinesses.config.properties.ThirdPartyProperties
import com.aestudio.laactivebusinesses.model.Business
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate

@Service
class ThirdPartyAPIService(
    private val thirdPartyProperties: ThirdPartyProperties,
    private val restTemplate: RestTemplate
) {
    private val logger = LoggerFactory.getLogger(ThirdPartyAPIService::class.java)

    fun getActiveBusinesses(): Array<Business>? {

        kotlin.runCatching {
            return this.restTemplate.getForEntity(thirdPartyProperties.activeBusinesses, Array<Business>::class.java).body
        }.onFailure {
            logger.error("Fail to reach API server ${thirdPartyProperties.activeBusinesses}")
        }

        return null
    }
}