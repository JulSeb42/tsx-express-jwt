/*=============================================== MyAccount ===============================================*/

import React, { useContext } from "react"
import { Text, Utils, Avatar, Flexbox } from "tsx-library-julseb"
import { Link } from "react-router-dom"

import { AuthContext, ContextType } from "../../context/auth"

import Page from "../../components/layouts/Page"

const MyAccount = () => {
    const { user } = useContext(AuthContext) as ContextType

    return (
        <Page title="My account">
            <Flexbox alignItems="center" gap="xs">
                <Avatar
                    img={user.imageUrl}
                    alt={`Avatar ${user.fullName}`}
                    size={48}
                />

                <Text tag="h1">Hello {Utils.getFirstName(user.fullName)}</Text>
            </Flexbox>

            {!user.verified && <Text>Your account is not verified!</Text>}

            <Text>
                <Link to="/my-account/edit">Edit your account.</Link>
            </Text>
        </Page>
    )
}

export default MyAccount
