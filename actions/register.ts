"use server";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
export const register = async (values: RegisterSchemaType) => {
    console.log(values);
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid Field! "
        };
    }

    return { success: "Email sent!" };
};