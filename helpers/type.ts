import { KeyboardTypeOptions } from "react-native";
import { z } from "zod";

export const SignUpschema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 digits" }),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password : z.string().min(6,"Password must be at least 6 digits")
});

export type textInput = {
  name: string;
  label: string;
  placeholder: string;
  secureText: boolean;
  keyboardType: KeyboardTypeOptions;
};

export const InputSchema = z.object({
  input : z.string().min(1,{message : "Input is required"})
})