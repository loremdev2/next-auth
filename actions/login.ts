"use server";
import { LoginSchema, LoginSchemaType } from "@/schemas";
export const login = async (values: LoginSchemaType) => {
    console.log(values);
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid Field! "
        };
    }

    return { success: "Email sent!" };
};