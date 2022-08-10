/*=============================================== EditAccount ===============================================*/

import React, { useContext, useState } from "react"
import { Text, Form, Input, Alert } from "tsx-library-julseb"
import { useNavigate, Link } from "react-router-dom"

import { AuthContext, ContextType } from "../../context/auth"
import userService from "../../api/user.service"

import Page from "../../components/layouts/Page"
import DangerZone from "../../components/DangerZone"

import { EditProps } from "../../data/global-types"

const EditAccount = ({ edited, setEdited }: EditProps) => {
    const navigate = useNavigate()

    const { user, setUser, setToken, logoutUser } = useContext(
        AuthContext
    ) as ContextType

    const [inputs, setInputs] = useState({
        fullName: user.fullName,
    })
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        userService
            .editAccount(user._id, inputs)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                setEdited(!edited)
                navigate(-1)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        userService
            .deleteAccount(user._id)
            .then(() => {
                logoutUser()
                navigate("/goodbye")
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account" form>
            <Text tag="h1">Edit your account</Text>

            <Form
                onSubmit={handleSubmit}
                buttonPrimary={{ text: "Save changes" }}
                buttonSecondary={{ text: "Cancel", to: "/my-account" }}
            >
                <Input
                    id="fullName"
                    value={inputs.fullName}
                    onChange={handleInputs}
                    options={{ label: "Full name" }}
                    autoFocus
                />

                <Input
                    id="email"
                    value={user.email}
                    options={{
                        label: "Email",
                        helperBottom: "You can not edit your email.",
                    }}
                    disabled
                />
            </Form>

            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}

            <Text>
                <Link to="/my-account/edit-password">Edit your password.</Link>
            </Text>

            <DangerZone
                texts={{
                    body: "Are you sure you want to delete your account?",
                    buttonOpen: "Delete your account",
                }}
                buttonPrimary={{
                    text: "Yes, delete my account",
                    onClick: handleDelete,
                }}
            />
        </Page>
    )
}

export default EditAccount
