
import DashboardComponents from "@/components/dashboard/DashboardComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Dashboard ",
  description: "This is Admin SignIn page",
  // other metadata
};
const Dashboard: React.FC = () => {

  return (
    <>
 <div className = "">
   <DashboardComponents/>
 </div>
    </>
  );
};

export default Dashboard;
