import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePin from "./Pages/CreatePin";
import EditProfile from "./Pages/EditProfile";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import AccountManagementPage from "./Pages/AccountManagementPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Signin from "./signin/signin";
import Main from "./Mainpage/main";
import StickyFooter from "./StickyFooter/StickyFooter";
import CreatePinBlock from "./CreatePinBlock/CreatePinBlock";
import PIN from "./pin/pin";
import Homefeed from "./homefeed/homefeed";
import SearchBar from "./search/search";

function App() {
  return (
    //<Main />
    <Homefeed />
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route exact path="/" element={<EditProfile />} />
    //       <Route exact path="/EditProfile" element={<EditProfile />} />
    //       <Route
    //         exact
    //         path="/PersonalInformation"
    //         element={<PersonalInformationPage />}
    //       />
    //       <Route
    //         exact
    //         path="/AccountManagement"
    //         element={<AccountManagementPage />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
    //<CreatePin />
    //<SearchBar />
  );
}

export default App;
