import React from 'react';

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <style>
                {`
                    @keyframes gradientAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    .bg-animated-gradient {
                        background: radial-gradient(ellipse at top, var(--tw-gradient-stops));
                        background-size: 200% 200%;
                        animation: gradientAnimation 8s ease infinite;
                    }
                `}
            </style>
            <div className="h-full flex items-center justify-center bg-animated-gradient text-gray-100">
                {children}
            </div>
        </>
    );
}

export default AuthLayout;
