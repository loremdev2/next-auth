import * as z from "zod"


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
});


// Export the inferred type also

export type LoginSchemaType = z.infer<typeof LoginSchema>;