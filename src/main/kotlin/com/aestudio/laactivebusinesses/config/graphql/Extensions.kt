package com.aestudio.laactivebusinesses.config.graphql

import graphql.GraphqlErrorException

fun <T, R> Array<T>?.getOrThrowGraphQLError(f: (it: Array<T>) -> R?): R? {
    if (this != null) return f(this)
    throw GraphqlErrorException.newErrorException().message("Unreachable third party API, please try again later").build()
}