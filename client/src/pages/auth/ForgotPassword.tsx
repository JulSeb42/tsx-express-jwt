/*=============================================== ForgotPassword ===============================================*/

import React, { useState } from "react"
import { Text, Form, Input, Alert } from "tsx-library-julseb"
import { useNavigate } from "react-router-dom"

import authService from "../../api/auth.service"

import Page from "../../components/layouts/Page"

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        authService
            .forgotPassword({ email })
            .then(() => navigate("/login/forgot-password/email-sent"))
            .catch(err => setErrorMessage(err.response.data.message))
    }

    return (
        <Page title="I forgot my password" form>
            <Text tag="h1">I forgot my password</Text>

            <Text>
                Please enter your email address, we will send you a link to
                reset your password.
            </Text>

            <Form
                onSubmit={handleSubmit}
                buttonPrimary={{ text: "Send" }}
                buttonSecondary={{ text: "Cancel", to: "/login" }}
            >
                <Input
                    id="email"
                    onChange={handleEmail}
                    value={email}
                    options={{ label: "Email" }}
                    autoFocus
                />
            </Form>

            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
        </Page>
    )
}

export default ForgotPassword
