"use client";

import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useEffect, useState, useTransition } from "react";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { register } from "@/actions/register";

const RegisterForm = () => {
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // Show error messages only for 3 seconds
    useEffect(() => {
        if (errorMessageVisible) {
            const timeout = setTimeout(() => {
                setErrorMessageVisible(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [errorMessageVisible]);

    const onSubmit = (values: RegisterSchemaType) => {
        // Clear the messages before
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
        console.log("Form Data:", values);
    };

    const onError = () => {
        setErrorMessageVisible(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <CardWrapper
                headerLabel="Create an Account"
                backButtonLabel="Already have an account?"
                backButtonHref="/auth/login"
                showSocial
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit, onError)}
                        className="space-y-6 px-6 py-4"
                    >
                        <div className="space-y-4">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-medium">
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Your Name"
                                                type="text"
                                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </FormControl>
                                        {errorMessageVisible && (
                                            <FormMessage className="text-red-500 text-sm mt-1" />
                                        )}
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-medium">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="john.doe@example.com"
                                                type="email"
                                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </FormControl>
                                        {errorMessageVisible && (
                                            <FormMessage className="text-red-500 text-sm mt-1" />
                                        )}
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-medium">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Enter your password"
                                                type="password"
                                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </FormControl>
                                        {errorMessageVisible && (
                                            <FormMessage className="text-red-500 text-sm mt-1" />
                                        )}
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-slate-800 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-slate-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            Register
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};

export default RegisterForm;
