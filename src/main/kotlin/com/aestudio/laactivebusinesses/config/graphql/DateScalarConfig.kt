package com.aestudio.laactivebusinesses.config.graphql

import graphql.language.StringValue
import graphql.schema.Coercing
import graphql.schema.CoercingParseLiteralException
import graphql.schema.CoercingParseValueException
import graphql.schema.CoercingSerializeException
import graphql.schema.GraphQLScalarType
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.time.LocalDate
import java.time.format.DateTimeParseException

@Configuration
class DateScalarConfig {

    @Bean
    fun dateScalar(): GraphQLScalarType {
        return GraphQLScalarType.newScalar()
            .name("Date")
            .description("Java 8 LocalDate as scalar.")
            .coercing(object : Coercing<LocalDate, String> {
                override fun serialize(dataFetcherResult: Any): String {
                    return (dataFetcherResult as? LocalDate)?.toString() ?: throw CoercingSerializeException("Expected a LocalDate object.")
                }

                override fun parseValue(input: Any): LocalDate {
                    return try {
                        if (input is String) {
                            LocalDate.parse(input)
                        } else {
                            throw CoercingParseValueException("Expected a String")
                        }
                    } catch (e: DateTimeParseException) {
                        throw CoercingParseValueException(
                            String.format("Not a valid date: '%s'.", input), e
                        )
                    }
                }

                override fun parseLiteral(input: Any): LocalDate {
                    return if (input is StringValue) {
                        try {
                            LocalDate.parse(input.value)
                        } catch (e: DateTimeParseException) {
                            throw CoercingParseLiteralException(e)
                        }
                    } else {
                        throw CoercingParseLiteralException("Expected a StringValue.")
                    }
                }
            }).build()
    }
}