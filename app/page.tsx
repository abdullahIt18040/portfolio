import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div>
      {/* <h1>This is my portfolio application</h1> */}
    </div>
  );
}