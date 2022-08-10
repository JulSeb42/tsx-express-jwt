/*=============================================== DangerZone ===============================================*/

import React, { useState } from "react"
import { Button, Alert, Text, Flexbox } from "tsx-library-julseb"

const DangerZone = ({ texts, buttonPrimary }: Props) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            {!isVisible && (
                <Button
                    options={{ color: "danger" }}
                    onClick={() => setIsVisible(true)}
                >
                    {texts.buttonOpen}
                </Button>
            )}

            {isVisible && (
                <Alert color="danger">
                    <Text>{texts.body}</Text>

                    <Flexbox alignItems="center" gap="xs">
                        <Button
                            options={{ color: "danger" }}
                            onClick={buttonPrimary.onClick}
                        >
                            {buttonPrimary.text}
                        </Button>

                        <Button
                            options={{ variant: "text" }}
                            onClick={() => setIsVisible(false)}
                        >
                            {texts.buttonSecondary || "Cancel"}
                        </Button>
                    </Flexbox>
                </Alert>
            )}
        </>
    )
}

export default DangerZone

interface Props {
    texts: {
        buttonOpen: string
        body: string
        buttonSecondary?: string
    }

    buttonPrimary: {
        text: string
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    }
}
