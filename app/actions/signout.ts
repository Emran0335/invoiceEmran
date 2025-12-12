"use server";

// app/actions/auth.ts
import { signOut } from "@/app/utils/auth";

export async function signOutAction() {
  await signOut();
}
