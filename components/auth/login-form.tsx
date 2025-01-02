"use client"
import CardWrapper from "./card-wrapper";

const Loginform = () => {
    return (
        <div>
            <CardWrapper
                headerLabel="Welcome Back"
                backButtonLabel="Dont have an account?"
                backButtonHref="/auth/register"
                showSocial
            >
                Login form
            </CardWrapper>
        </div>
    )
}

export default Loginform;