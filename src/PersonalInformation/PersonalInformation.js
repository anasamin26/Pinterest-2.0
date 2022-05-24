import "./PersonalInformation.css";
import StickyFooter from "../StickyFooter/StickyFooter";

const PersonalInformation = () => (
  <div>
    <div className="mt-5 edit-container">
      <h3>
        <b>Personal Information</b>
      </h3>
      <p className="mb-4">
        Edit your basic personal info to improve recommendations. This
        information is private and won’t show up in your public profile.
      </p>
      <div class="form-group mt-3">
        <label>
          <small>Gender</small>
        </label>
        <div className="d-flex flex-row  flex-wrap">
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label>Male</label>
          </div>
          <div class="form-check mx-3">
            <input class="form-check-input" type="radio" />
            <label>Female</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label>Non-Binary</label>
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label>
          <small>Country</small>
        </label>
        <select class="form-select input-fields" style={{ height: "50px" }}>
          <option selected>United States</option>
          <option value="Afganistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label>
          <small>Language</small>
        </label>
        <select class="form-select input-fields" style={{ height: "50px" }}>
          <option selected>English (US)</option>
          <option value="1">Urdu</option>
        </select>
      </div>
      <div style={{ marginTop: "150px" }}>
        <StickyFooter />
      </div>
    </div>
  </div>
);
export default PersonalInformation;
