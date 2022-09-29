/*=============================================== AllUsers ===============================================*/

import React from "react"
import { Text, Hooks, PageLoading, Grid, Utils } from "tsx-library-julseb"

import userService from "../../api/user.service"

import Page from "../../components/layouts/Page"
import UserCard from "../../components/UserCard"

import { UserType } from "../../data/global-types"

const AllUsers = () => {
    const { response, error, isLoading } = Hooks.useFetch<UserType[] | null>(
        userService.allUsers()
    )
    const users = response

    const isMobile = Hooks.useMaxWidth(600)
    const isTablet = Hooks.useMaxWidth(768)

    return isLoading ? (
        <PageLoading />
    ) : (
        <Page title="All users">
            <Text tag="h1">All users</Text>

            {error ? (
                <Text>{error}</Text>
            ) : users?.length === 0 ? (
                <Text>No user yet.</Text>
            ) : (
                <Grid col={isMobile || isTablet ? 12 : 4}>
                    {users?.map(user => (
                        <UserCard user={user} key={Utils.uuid()} />
                    ))}
                </Grid>
            )}
        </Page>
    )
}

export default AllUsers
