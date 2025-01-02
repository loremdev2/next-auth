"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      {/* Google Button */}
      <Button
        size="lg"
        variant="secondary"
        className="w-40" // Increased width
        onClick={() => {
          console.log("Google Button clicked");
        }}
      >
        <div className="flex items-center justify-center gap-x-2">
          <FcGoogle className="h-5 w-5" />
          <span className="text-gray-600">Sign in with Google</span> {/* Lighter text */}
        </div>
      </Button>

      {/* GitHub Button */}
      <Button
        size="lg"
        variant="secondary"
        className="w-40" // Increased width
        onClick={() => {
          console.log("GitHub Button clicked");
        }}
      >
        <div className="flex items-center justify-center gap-x-2">
          <FaGithub className="h-5 w-5" />
          <span className="text-gray-600">Sign in with GitHub</span> {/* Lighter text */}
        </div>
      </Button>
    </div>
  );
};

export default Social;
