import RecentCandidates from "./RecentCandidates";
import Sidebar from "./Sidebar";
import RecruiterHeader from "./RecruiterHeader";
import DashboardCards from "./DashboardCards";


const RecruiterDashboard = () => {
  return (
    <>
     

        <Sidebar />
        <RecruiterHeader />
        
        <RecentCandidates/>
    </>
  );
}
export default RecruiterDashboard;