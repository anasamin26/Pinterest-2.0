import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import HomeNavbar from "../mainnav/homenav";
import PIN from "../pin/pin";
function SearchBar() {
  return (
    <div>
      <HomeNavbar />
      <div className="container CenteredContent">
        <div className="CenteredContentinDiv">
          <img class="imgpadding" src="./logo192.png" />
          <h3 className="ItemsDisplayAround">Ali Nawaz</h3>
          <p className="ItemsDisplay">@alinawaaaz</p>
          <p className="ItemsDisplay">0 following</p>
          <button className="btn btn-light buttonPadding buttonStyle buttonPadding">
            <strong>Share</strong>
          </button>
          <button className="buttonPadding  btn btn-light buttonStyle">
            <strong>Edit</strong>
          </button>
        </div>

        <div>
          <div>
            <div className="Container">
              <PIN />
              <PIN />
              <PIN />
              <PIN />
              <PIN />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
