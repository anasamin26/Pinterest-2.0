import PublicProfile from "../PublicProfile/PublicProfile";
import EditProfileSideBar from "../EditProfileSideBar/EditProfileSideBar";
import HomeNavbar from "../mainnav/homenav";
const EditProfile = () => (
  <div className="container-fluid">
    <HomeNavbar />
    <div className="row">
      <div className="col-md-3">
        <EditProfileSideBar />
      </div>
      <div className="col-md-9">
        <PublicProfile />
      </div>
    </div>
  </div>
);
export default EditProfile;
