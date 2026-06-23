import z from "zod"


let signUpDto = z.object({
  username: z.string().max(30).min(3),
  email:z.email(),
  password:z.string().min(8)
})

let signInDto = signUpDto.pick({
  email:true,
  password:true
})


export type SignupDtoType = z.infer<typeof signUpDto>;
export type SignInDtoType = z.infer<typeof signInDto>;

export {signInDto,signUpDto}
