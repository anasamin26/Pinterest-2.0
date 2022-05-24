import "./CreatePinBlock.css";
import { MdFileUpload } from "react-icons/md";
import React, { useState } from "react";

export default function CreatePinBlock() {
  const [pin, setPin] = useState({
    preview: "",
    raw: "",
    title: "",
    description: "",
    alt: "",
    link: "",
  });

  const handleChange = (e) => {
    setPin({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pin);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="pin-container container">
          <div className="p-2"></div>
          <div
            class="input-group"
            style={{ maxWidth: "240px", float: "right" }}
          >
            <select class="form-select select-color">
              <option selected>Favorites</option>
              <option value="2">My Pins</option>
            </select>
            <button
              class="btn"
              type="submit"
              style={{
                backgroundColor: "#e80424",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Save
            </button>
          </div>
          <br />
          <div className="row m-4" style={{ backgroundColor: "white" }}>
            <div className="col-md-5">
              <label htmlFor="upload-button">
                {pin.preview ? (
                  <img
                    src={pin.preview}
                    alt="dummy"
                    width="100%"
                    height="auto"
                    className="rounded"
                  />
                ) : (
                  <div className="grey-back">
                    <div className="pin-image m-1 p-1 d-flex flex-column justify-content-center align-items-md-center">
                      <div class="icon" style={{ margin: "0 auto 0" }}>
                        <MdFileUpload />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        Drag and drop or click to
                        <br /> upload
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <small className="text-muted">
                          Recommendation: Use high quality .jpg files less than
                          20MB
                        </small>
                      </div>
                    </div>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-7 px-4">
              <input
                className="title mt-4 mb-5"
                type="text"
                value={pin.title}
                onChange={(e) => setPin({ ...pin, title: e.target.value })}
                placeholder="Add your title"
              />
              <br></br>
              <img src="./person.png" className="rounded-circle" width="50px" />
              <span className="mx-2">
                <b>Abdul Majid</b>
              </span>
              <br />
              <input
                className="description mt-3 mb-4"
                type="text"
                value={pin.description}
                onChange={(e) =>
                  setPin({ ...pin, description: e.target.value })
                }
                placeholder="Tell everyone what your pin is about"
              />
              <input
                className="description mt-2 mb-5"
                type="text"
                value={pin.alt}
                onChange={(e) => setPin({ ...pin, alt: e.target.value })}
                placeholder="Explain what people can see in the pin(Alt)"
              />
              <div className="py-5"></div>
              <input
                className="dest-link mt-3 mb-4"
                type="url"
                value={pin.link}
                onChange={(e) => setPin({ ...pin, link: e.target.value })}
                placeholder="Add a destination Link"
              />
            </div>
          </div>
          <div className="p-2"></div>
        </div>
      </form>
    </div>
  );
}
