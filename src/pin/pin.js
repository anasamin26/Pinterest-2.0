import React, { useState } from "react";
import "./pin.css";

// function upload_img(event, setPinImage) {
//   if (event.target.files && event.target.files[0]) {
//     if (/image\/*/.test(event.target.files[0].type)) {
//       const reader = new FileReader();

//       reader.onload = function () {
//         setPinImage(reader.result);
//       };
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
// }
export default function PIN(props) {
  let { urls } = props;
  const [pinImage, setPinImage] = useState();
  return (
    <div className="pin">
      {/* <input
        // onChange={(event) => upload_img(event, setPinImage)}
        type="file"
        name="pic"
        id="pic"
        value=""
      ></input> */}
      <div className="card pin__container">
        <div className="pin_title" id="abc"></div>
        <div className="pin_modal">
          <div className="modal_header">
            <div className="save_card">Save</div>
          </div>
          <div className="modal_footer">
            <div className="destination">
              <div className="mock_icon_container">
                <img
                  src="./images/rightup.png"
                  alt="rightup"
                  className="pin_mock_icon"
                />
              </div>
              <span>Eatery</span>
            </div>

            <div className="mock_icon_container">
              <img
                src="./images/share.png"
                alt="send"
                className="pin_mock_icon"
              />
            </div>

            <div className="mock_icon_container">
              <img
                src="./images/ellipse.png"
                alt="edit"
                className="pin_mock_icon"
              />
            </div>
          </div>
        </div>
        <div className="pin_image">
          <img src={urls?.regular} alt="pinImage" />
        </div>
      </div>
    </div>
  );
}
