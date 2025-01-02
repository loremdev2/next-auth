"use client";
import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className={`${font.className} flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-gray-100`}
    >
      {/* Heading with Text Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-4xl text-gray-400">🔒</span> {/* Lock Emoji as Icon */}
        <h1 className="text-5xl font-bold text-gray-100">Auth</h1>
      </div>

      {/* Caption */}
      <p className="text-lg text-gray-400 mb-6">
        A simple authentication service
      </p>

      {/* Button */}
      <LoginButton mode="redirect">
        <Button size="lg" variant="secondary">
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
}
