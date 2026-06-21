import DashboardComponents from "@/components/dashboard/DashboardComponents";
import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div>
      <DashboardComponents/>
    </div>
  );
}