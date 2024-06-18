import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "이메일은 필수 항목입니다."
    }),
    password: z.string().refine(password => password.length >= 8, {
        message: "Password must be at least 8 characters long",
        path: ['password'], // indicates this error is about the password field
      })
})

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)\[\]\{\}\-_=\+:;'"<,./?])[a-zA-Z0-9!@#\$%\^&*\(\)\[\]\{\}\-_=\+:;'"<,./?]{8,}$/;
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "이메일은 필수 항목입니다."
    }),
    password: z.string().min(8, { message: "비밀번호는 최소 8자입니다." })
        .regex(passwordRegex, {
            message:
                "비밀번호는 최소 하나 이상의 소문자, 대문자, 숫자, 특수문자를 포함해야 합니다.",
        }),
    name: z.string(),
    phone:z.string(),
    job:z.string().optional()
})

