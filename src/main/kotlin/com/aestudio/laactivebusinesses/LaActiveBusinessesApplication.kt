package com.aestudio.laactivebusinesses

import com.aestudio.laactivebusinesses.config.properties.ThirdPartyProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(ThirdPartyProperties::class)
class LaActiveBusinessesApplication

fun main(args: Array<String>) {
    runApplication<LaActiveBusinessesApplication>(*args)
}
