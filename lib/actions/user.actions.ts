"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { firstName, lastName, email, password } = userData;

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return JSON.parse(JSON.stringify(newUserAccount));
  } catch (err: any) {
    console.log("Error", err.message);
  }
};

export const singIn = async (userData: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const { email, password } = userData;

    const response = await account.createEmailPasswordSession(email, password);
    console.log(response);
    if (response) return JSON.parse(JSON.stringify(response));
  } catch (err) {
    console.log("Error", err);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const session = await account.get();
    return JSON.parse(JSON.stringify(session));
  } catch (error) {
    return null;
  }
}

export const logoutSession = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");

    await account.deleteSession("current");
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};
