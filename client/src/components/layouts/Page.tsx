/*=============================================== Page ===============================================*/

import React from "react"
import { Wrapper, Main } from "tsx-library-julseb"

import Helmet from "./Helmet"
import Header from "./Header"

import { Props as HelmetProps } from "./Helmet"

const Page = ({
    children,
    title,
    description,
    keywords,
    cover,
    mainWidth = "default",
    noWrapper,
    isLoading,
    template = "1col",
}: Props) => {
    return (
        <>
            <Helmet
                title={title}
                description={description}
                keywords={keywords}
                cover={cover}
            />

            {!isLoading && <Header />}

            {!noWrapper ? (
                <Wrapper template={template}>
                    {template === "1col" ? (
                        <Main size={mainWidth}>{children}</Main>
                    ) : (
                        children
                    )}
                </Wrapper>
            ) : (
                children
            )}
        </>
    )
}

export default Page

interface Props extends HelmetProps {
    children?: any
    mainWidth?: "default" | "large" | "form"
    isLoading?: boolean
    template?: "1col" | "2cols" | "3cols"
    noWrapper?: boolean
}
