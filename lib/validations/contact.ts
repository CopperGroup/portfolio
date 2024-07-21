import * as z from "zod";

export const contactValidation = z.object({
    email: z.string().min(1, { message: "Please provide an email." }),
    name: z.string().min(1, { message: "Please provide your name." }),
    phoneNumber: z.string().min(1, { message: "Please provide your phone number." })
})