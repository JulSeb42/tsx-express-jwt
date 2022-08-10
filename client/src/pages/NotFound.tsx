/*=============================================== NotFound ===============================================*/

import React from "react"
import { Text } from "tsx-library-julseb"
import { Link } from "react-router-dom"

import Page from "../components/layouts/Page"

const NotFound = () => {
    return (
        <Page title="404">
            <Text tag="h1">Page not found</Text>

            <Text>
                <Link to="/">Back to homepage.</Link>
            </Text>
        </Page>
    )
}

export default NotFound
