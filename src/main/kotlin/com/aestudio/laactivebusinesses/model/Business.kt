package com.aestudio.laactivebusinesses.model

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalDate

data class Business(

    @JsonProperty("business_name")
    val name: String,

    @JsonProperty("street_address")
    val address: String,

    val city: String,

    @JsonProperty("zip_code")
    val zipCode: String,

    @JsonProperty("location_1")
    val location: Location?,

    @JsonProperty("location_start_date")
    val startDate: LocalDate?,

    @JsonProperty("location_end_date")
    val endDate: LocalDate?

)