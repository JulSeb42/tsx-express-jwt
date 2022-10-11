/*=============================================== Header ===============================================*/

import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import {
    Header as Container,
    ThemeContext,
    ComponentProps,
    ButtonIcon,
} from "tsx-library-julseb"
import { uuid } from "../../utils"

import { AuthContext, AuthContextType } from "../../context/auth"

import siteData from "../../data/site-data"

const Header = () => {
    const { isLoggedIn, logoutUser } = useContext(
        AuthContext
    ) as AuthContextType
    const { toggleTheme, selectedTheme } = useContext(
        ThemeContext
    ) as ComponentProps.ThemeContextProps

    const baseLinks: NavLinkType[] = [
        {
            text: "Home",
            to: "/",
            end: true,
        },
        {
            text: "All users",
            to: "/users",
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
        <Container
            logo={{ text: siteData.name }}
            navMobileVariant="drawer"
            shadow="m"
        >
            {baseLinks.map(({ text, to, onClick, end }) =>
                to ? (
                    <NavLink to={to} end={end} key={uuid()}>
                        {text}
                    </NavLink>
                ) : (
                    <button onClick={onClick} key={uuid()}>
                        {text}
                    </button>
                )
            )}

            {isLoggedIn
                ? loggedInLinks.map(({ text, to, onClick, end }) =>
                      to ? (
                          <NavLink to={to} end={end} key={uuid()}>
                              {text}
                          </NavLink>
                      ) : (
                          <button onClick={onClick} key={uuid()}>
                              {text}
                          </button>
                      )
                  )
                : notLoggedInLinks.map(({ text, to, onClick, end }) =>
                      to ? (
                          <NavLink to={to} end={end} key={uuid()}>
                              {text}
                          </NavLink>
                      ) : (
                          <button onClick={onClick} key={uuid()}>
                              {text}
                          </button>
                      )
                  )}

            <ButtonIcon
                icon={selectedTheme === "dark" ? "sun" : "moon"}
                size={24}
                variant="transparent"
                color="background"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            />
        </Container>
    )
}

export default Header

interface NavLinkBase {
    text: string
    end?: boolean
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
