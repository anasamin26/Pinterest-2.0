import './EditProfileSideBar.css'
import { Link} from 'react-router-dom';

const EditProfileSideBar = () => (
    <div>
    <nav id="sidebarMenu" class="d-md-block sidebar collapse m-3">
        <div class="position-sticky pt-3">
        <ul class="nav flex-column">
            <li class="nav-item underline my-3">
            <button class="nav-link active sidebar-btn" aria-current="page" href="#">
            <Link to="/EditProfile" style={{color:"black",textDecoration:"none"}}>Public Profile</Link>
            </button>
            </li>
            <li class="nav-item underline mb-3">
            <a class="nav-link sidebar-btn">
            <Link to="/PersonalInformation" style={{color:"black",textDecoration:"none"}}>Personal Information</Link>
            </a>
            </li>
            <li class="nav-item underline mb-3">
            <a class="nav-link sidebar-btn" href="#">
            <Link to="/AccountManagement" style={{color:"black",textDecoration:"none"}}>Account Management</Link>
            </a>
            </li>
        </ul>
        </div>
    </nav>
    </div>
)

export default EditProfileSideBar;