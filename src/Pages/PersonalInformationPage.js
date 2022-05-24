import EditProfileSideBar from "../EditProfileSideBar/EditProfileSideBar";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import HomeNavbar from "../mainnav/homenav";
const PersonalInformationPage = () => (
  <div className="container-fluid">
    <HomeNavbar />
    <div className="row">
      <div className="col-md-3">
        <EditProfileSideBar />
      </div>
      <div className="col-md-9">
        <PersonalInformation />
      </div>
    </div>
  </div>
);
export default PersonalInformationPage;
