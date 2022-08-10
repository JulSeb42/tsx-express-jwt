/*=============================================== Header ===============================================*/

import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Header as Container } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import { AuthContext, ContextType } from "../../context/auth"

import siteData from "../../data/site-data"

const Header = () => {
    const { isLoggedIn, logoutUser } = useContext(AuthContext) as ContextType

    const baseLinks: NavLinkType[] = [
        {
            text: "Home",
            to: "/",
        },
    ]

    const notLoggedInLinks: NavLinkType[] = [
        {
            text: "Log in",
            to: "/login",
        },
        {
            text: "Sign up",
            to: "/signup",
        },
    ]

    const loggedInLinks: NavLinkType[] = [
        {
            text: "My account",
            to: "/my-account",
        },
        {
            text: "Log out",
            onClick: logoutUser,
        },
    ]

    return (
        <Container logo={{ text: siteData.name }}>
            {baseLinks.map(({ text, to, onClick }) =>
                to ? (
                    <NavLink to={to} key={uuid()}>
                        {text}
                    </NavLink>
                ) : (
                    <button onClick={onClick} key={uuid()}>
                        {text}
                    </button>
                )
            )}

            {isLoggedIn
                ? loggedInLinks.map(({ text, to, onClick }) =>
                      to ? (
                          <NavLink to={to} key={uuid()}>
                              {text}
                          </NavLink>
                      ) : (
                          <button onClick={onClick} key={uuid()}>
                              {text}
                          </button>
                      )
                  )
                : notLoggedInLinks.map(({ text, to, onClick }) =>
                      to ? (
                          <NavLink to={to} key={uuid()}>
                              {text}
                          </NavLink>
                      ) : (
                          <button onClick={onClick} key={uuid()}>
                              {text}
                          </button>
                      )
                  )}
        </Container>
    )
}

export default Header

interface NavLinkBase {
    text: string
}

interface NavLinkTo extends NavLinkBase {
    to: string
    onClick?: never
}

interface NavLinkButton extends NavLinkBase {
    to?: never
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

type NavLinkType = NavLinkTo | NavLinkButton
