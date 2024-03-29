import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import UserSignup from "./Pages/Users/UserSignup/userSignup";
import UserHome from "./Pages/Users/UserHome/UserHome";
import UserOrphanagesList from "./Pages/Orphanages/UserOrphanagesList/userOrphanagesList";
import OrphanageDetails from "./Components/Common/OrphanageDetails/orphanageDetails";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard/adminDashboard";
import CreateDonationRequest from "./Pages/Orphanages/CreateDonationRequest/createDonationRequest";
import OrphanageHome from "./Pages/Orphanages/OrphanageHome/orphanageHome";
import UserDonationRequest from "./Components/User/UserDonationRequest/userDonationRequest";
import DonationReqDetails from "./Components/User/UserDonationRequest/donationReqDetails";
import LoginModalTest from "./Components/Common/LoginModal/loginModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user  */}
        <Route path="/" element={<UserHome />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />

        <Route
          path="/user/orphanages-list"
          element={<UserOrphanagesList activeUser="user" />}
        />
        <Route path="/user/orphanage/:id" element={<OrphanageDetails />} />
        <Route
          path="/user/orphanage/request"
          element={<UserDonationRequest />}
        />

        {/* orphange  */}
        {/* orphnaage routes  */}
        <Route path="/orphanage" element={<OrphanageHome />} />
        <Route
          path="/orphanage/orphanages-list"
          element={<UserOrphanagesList activeUser="orphanage" />}
        />
        <Route
          path="/orphanage/donation-request"
          element={<CreateDonationRequest />}
        />

        {/* Admin Routes  */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* common routes */}
        <Route path="/modal/test" element={<LoginModalTest />} />
        <Route path="/*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
