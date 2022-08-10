/*=============================================== Login ===============================================*/

import React, { useState, useContext } from "react"
import { Text, Form, Input, Alert } from "tsx-library-julseb"
import { useNavigate, Link } from "react-router-dom"

import { AuthContext, ContextType } from "../../context/auth"
import authService from "../../api/auth.service"

import Page from "../../components/layouts/Page"

const Login = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext) as ContextType

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        authService
            .login(inputs)
            .then(res => {
                loginUser(res.data.authToken)
                navigate(-1)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }

    return (
        <Page title="Log in" form>
            <Text tag="h1">Log in</Text>

            <Form onSubmit={handleSubmit} buttonPrimary={{ text: "Log in" }}>
                <Input
                    id="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleInputs}
                    options={{ label: "Email" }}
                    autoFocus
                />

                <Input
                    id="password"
                    password
                    value={inputs.password}
                    onChange={handleInputs}
                    options={{ label: "Password" }}
                />
            </Form>

            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}

            <Text>
                <Link to="/login/forgot-password">I forgot my password.</Link>
            </Text>

            <Text>
                You don't have an account? <Link to="/signup">Sign up</Link>.
            </Text>
        </Page>
    )
}

export default Login
