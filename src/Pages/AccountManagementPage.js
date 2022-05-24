import AccountManagement from "../AccountManagement/AccountManagement";
import EditProfileSideBar from "../EditProfileSideBar/EditProfileSideBar";
import HomeNavbar from "../mainnav/homenav";
const AccountManagementPage = () => (
  <div className="container-fluid">
    <HomeNavbar />
    <div className="row">
      <div className="col-md-3">
        <EditProfileSideBar />
      </div>
      <div className="col-md-9">
        <AccountManagement />
      </div>
    </div>
  </div>
);
export default AccountManagementPage;
