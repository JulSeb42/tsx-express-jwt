/*=============================================== Global types ===============================================*/

export interface EditProps {
    edited?: boolean
    setEdited?: any
}

export interface UserType {
    email: string
    fullName: string
    password: string
    verified: boolean
    verifyToken: string
    resetToken?: string
    imageUrl: string
}