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
    form,
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

            <Wrapper template={template}>
                {template === "1col" ? (
                    <Main size={form ? "form" : "default"}>{children}</Main>
                ) : (
                    children
                )}
            </Wrapper>
        </>
    )
}

export default Page

interface Props extends HelmetProps {
    children: any
    form?: boolean
    isLoading?: boolean
    template?: "1col" | "2cols" | "3cols"
}
