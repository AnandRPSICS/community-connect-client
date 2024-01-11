import { useEffect, useState } from "react";
import CommunityHeader from "../../Common/CommunityHeader/CommunityHeader.jsx";
import UserFooter from "../../Common/UserFooter/userFooter.jsx";
import UserNavbar from "../UserNavbar/userNavbar.jsx";
import childImg1 from "../../../Assets/Images/child-3.png";
import { Container } from "react-bootstrap";
import DonationCardContainer from "./donationCardContainer.jsx";
import "./userDonationRequest.css";
import axiosInstance from "../../../api/BaseUrl.js";
const UserDonationRequest = () => {
  const [allDonationRequests, setAllDonationRequests] = useState([]);
  const [allAcceptedReqs, setAllAcceptedReqs] = useState([]);

  const desc =
    "Join Us in Supporting the Little Hearts . Together, let's make a difference in the lives. Your support is a beacon of hope, guiding them towards a path of joy and fulfillment. Explore the impact of your kindness";
  const heading = "Explore the Love";
  useEffect(() => {
    getAllRequests();
  }, []);

  const getAcceptedRequests = (allReqs) => {
    const allAcceptedReqs = allReqs.filter(
      (req) => req.isAdminApproved === "approved"
    );
    return allAcceptedReqs;
  };

  const getAllRequests = async () => {
    try {
      const res = await axiosInstance.get("donation-request/get-all-requests");
      let allReqs = res?.data?.data || [];
      if (allReqs.length > 0) {
        // reverse the reqs for showing the last reqs top
        allReqs.reverse();
        setAllDonationRequests(allReqs);
        const allAcceptedReqs = getAcceptedRequests(allReqs);
        setAllAcceptedReqs(allAcceptedReqs);
      }
    } catch (error) {
      console.log("error on get all donation request", error);
    }
  };
  return (
    <Container className="p-0" fluid>
      <UserNavbar />
      <CommunityHeader
        heading={heading}
        description={desc}
        imgPath={childImg1}
      />
      <Container id="orphanage-request-container" fluid className="bg-light">
        {allAcceptedReqs.length > 0 && (
          <DonationCardContainer allAcceptedReqs={allAcceptedReqs} />
        )}
        {allAcceptedReqs.length === 0 && (
          <h1 className="text-center text-dark"> No requests found</h1>
        )}
      </Container>
      <UserFooter />
    </Container>
  );
};

export default UserDonationRequest;
