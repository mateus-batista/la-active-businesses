package com.aestudio.laactivebusinesses.config.properties

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
@ConfigurationProperties("third-party")
data class ThirdPartyProperties(val activeBusinesses: String)