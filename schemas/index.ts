import * as z from "zod"


export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
});


// Export the inferred type also

export type LoginSchemaType = z.infer<typeof LoginSchema>;