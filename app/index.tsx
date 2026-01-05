import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = true; // later from auth
const role = "manager"; // TEMP for now

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  if (role === "manager") {
    return <Redirect href="/(manager)/home" />;
  }

  return <Redirect href="/(site)/home" />;
}
