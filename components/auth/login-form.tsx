"use client";

import * as z from "zod";
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas";
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
import { login } from "@/actions/login";

const LoginForm = () => {
	const [errorMessageVisible, setErrorMessageVisible] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
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

	const onSubmit = (values: LoginSchemaType) => {

		// Clear the messages before
		setError("");
		setSuccess("");

		startTransition(() => {
			login(values)
				.then((data) => {
					setError(data.error);
					setSuccess(data.success);
				})
		})
		console.log("Form Data:", values);
		// Handle login logic here
	};

	const onError = () => {
		setErrorMessageVisible(true);
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<CardWrapper
				headerLabel="Welcome Back"
				backButtonLabel="Don't have an account?"
				backButtonHref="/auth/register"
				showSocial
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit, onError)}
						className="space-y-6 px-6 py-4"
					>
						<div className="space-y-4">
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
							Login
						</Button>
					</form>
				</Form>
			</CardWrapper>
		</div>
	);
};

export default LoginForm;
