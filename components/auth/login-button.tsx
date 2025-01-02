"use client";
import { useRouter } from "next/navigation"
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {

    const router = useRouter();

    const handleClick = () => {
        console.log("Login button is clicked");
        if (mode === "redirect") {
            // Simulate redirect action
            console.log("Redirecting to login page...");
            router.push("/auth/login");
        } else {
            // Simulate modal opening
            console.log("Opening login modal...");
        }
    };

    return (
        <span className="cursor-pointer" onClick={handleClick}>
            {children}
        </span>
    );
};

export default LoginButton;
