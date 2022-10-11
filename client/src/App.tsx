/*=============================================== App ===============================================*/

import React, { useContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeContext, ThemeProvider, ComponentProps } from "tsx-library-julseb"
import { uuid } from "./utils"

import ProtectedRoute from "./routes/ProtectedRoute"
import AnonRoute from "./routes/AnonRoute"

import routes from "./routes/routes"

const App = () => {
    const [edited, setEdited] = useState(false)
    const { theme } = useContext(
        ThemeContext
    ) as ComponentProps.ThemeContextProps

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        element={
                            route.protected ? (
                                <ProtectedRoute>
                                    <route.element
                                        edited={route.edit && edited}
                                        setEdited={route.edit && setEdited}
                                    />
                                </ProtectedRoute>
                            ) : route.anon ? (
                                <AnonRoute>
                                    <route.element
                                        edited={route.edit && edited}
                                        setEdited={route.edit && setEdited}
                                    />
                                </AnonRoute>
                            ) : (
                                <route.element
                                    edited={route.edit && edited}
                                    setEdited={route.edit && setEdited}
                                />
                            )
                        }
                        key={uuid()}
                    />
                ))}
            </Routes>
        </ThemeProvider>
    )
}

export default App
