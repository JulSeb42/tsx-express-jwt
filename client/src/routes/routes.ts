/*=============================================== Routes ===============================================*/

import { FC } from "react"

import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

import Signup from "../pages/auth/Signup"
import ThankYou from "../pages/auth/ThankYou"
import Verify from "../pages/auth/Verify"
import Login from "../pages/auth/Login"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ForgotSent from "../pages/auth/ForgotSent"
import ResetPassword from "../pages/auth/ResetPassword"
import Goodbye from "../pages/auth/Goodbye"

import MyAccount from "../pages/user/MyAccount"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"

type route = {
    path: string
    element: FC | any
    protected?: boolean
    anon?: boolean
    edit?: boolean
}

const routes: route[] = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },

    {
        path: "/signup",
        element: Signup,
        anon: true,
    },
    {
        path: "/thank-you",
        element: ThankYou,
    },
    {
        path: "/verify/:token/:id",
        element: Verify,
    },
    {
        path: "/login",
        element: Login,
        anon: true,
    },
    {
        path: "/login/forgot-password",
        element: ForgotPassword,
        anon: true,
    },
    {
        path: "/login/forgot-password/email-sent",
        element: ForgotSent,
        anon: true,
    },
    {
        path: "/reset-password/:token/:id",
        element: ResetPassword,
        anon: true,
    },
    {
        path: "/goodbye",
        element: Goodbye,
        anon: true,
    },

    {
        path: "/my-account",
        element: MyAccount,
        protected: true,
    },
    {
        path: "/my-account/edit",
        element: EditAccount,
        protected: true,
        edit: true,
    },
    {
        path: "/my-account/edit-password",
        element: EditPassword,
        protected: true,
        edit: true,
    },
]

export default routes