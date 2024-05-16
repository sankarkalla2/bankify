import AuthForm from "@/components/auth-form";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  if (loggedIn?.name) {
    return redirect("/");
  }
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
