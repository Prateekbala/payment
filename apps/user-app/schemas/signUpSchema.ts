import { z } from 'zod';


export const signUpSchema = z.object({
  number:z.string().min(10,{message:"Mobile number not valid"}),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});
