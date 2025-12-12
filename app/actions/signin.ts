"use server"
// app/actions/auth.ts
import { signIn } from "@/app/utils/auth";

export async function signInAction(formData: FormData) {
  "use server";
  await signIn("nodemailer", formData);
}
