/*=============================================== ResetPassword ===============================================*/

import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
    Text,
    Form,
    Input,
    ComponentProps,
    Utils,
    Alert,
} from "tsx-library-julseb"

import authService from "../../api/auth.service"
import userService from "../../api/user.service"

import Page from "../../components/layouts/Page"
import NotFound from "../NotFound"

const ResetPassword = () => {
    const navigate = useNavigate()
    const { token, id } = useParams()

    const [allIds, setAllIds] = useState<undefined | string[]>([])
    const [allTokens, setAllTokens] = useState<undefined | string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService.allUsers().then(res => {
            setAllIds(res.data.map((user: any) => user._id))
            setAllTokens(res.data.map((user: any) => user.resetToken))
            setIsLoading(false)
        })
    }, [])

    const [password, setPassword] = useState("")
    const [validation, setValidation] =
        useState<ComponentProps.ValidationProps>(undefined)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

        if (e.target.value.length > 0) {
            if (Utils.passwordRegex.test(e.target.value)) {
                setValidation("passed")
            } else {
                setValidation("not-passed")
            }
        } else {
            setValidation(undefined)
        }
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const requestBody = { password, resetToken: token, id }

        authService
            .resetPassword(requestBody)
            .then(() => navigate("/login"))
            .catch(err => setErrorMessage(err.response.data.message))
    }

    if (!isLoading) {
         if (
             (id !== undefined && !allIds?.includes(id)) ||
             (token !== undefined && !allTokens?.includes(token))
         ) {
             return <NotFound />
         }
    }

    return (
        <Page title="Reset your password" form>
            <Text tag="h1">Reset your password</Text>

            <Form onSubmit={handleSubmit} buttonPrimary={{ text: "Send" }}>
                <Input
                    id="password"
                    password
                    options={{
                        label: "New password",
                        helperBottom:
                            validation &&
                            "Password must be at least 6 characters long and must contain at least one number, one lowercase and one uppercase letter.",
                    }}
                    value={password}
                    onChange={handlePassword}
                    validation={{ status: validation }}
                />
            </Form>

            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
        </Page>
    )
}

export default ResetPassword
