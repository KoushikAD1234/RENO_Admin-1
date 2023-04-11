import { useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";

const AddProduct = ({ setExpand, setActiveTab }) => {
  setExpand("homeService");
  setActiveTab("productList");
  const head = "Add Product";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [label, setLabel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content); // Do something with the data
    setTitle("");
    setContent("");
    setImages([]);
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      uploadedImages.push({
        name: files[i].name,
        url: URL.createObjectURL(files[i]),
      });
    }
    setImages(uploadedImages);
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div className=" ml-72 mb-10 relative" style={{ marginTop: "70px" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginRight: 0, marginLeft: 920 }}>
            <button
              className="rounded mt-10"
              style={{
                backgroundColor: "black",
                width: "130px",
                height: "47px",
                color: "white",
              }}
              type="submit"
            >
              Draft
            </button>

            <button
              className="rounded mt-10"
              style={{
                backgroundColor: "rgba(153, 190, 17, 0.831)",
                width: "130px",
                height: "47px",
                color: "white",
                marginLeft: "30px",
              }}
              type="submit"
            >
              Publish
            </button>
          </div>
          <label className="grid mt-5">
            Product Title
            <input
              type="text"
              placeholder="Enter Title"
              id="title"
              className="rounded outline-none"
              style={{
                height: "50px",
                width: "1210px",
                paddingLeft: "10px",
                border: "2px solid 	#e6f7fe",
                marginTop: "5px",
                fontSize: "15px",
              }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <label className="grid pr-6">
              Catagory
              <select
                id="label"
                name="label"
                class="outline-none rounded"
                style={{
                  height: "50px",
                  width: "590px",
                  paddingLeft: "5px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={label}
                onChange={handleLabelChange}
              >
                <option value="">Select Catagory</option>
                <option value="personal">Admin</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="grid pr-6">
              Package
              <input
                type="text"
                // value={name}
                class="outline-none rounded"
                placeholder="$000.00"
                style={{
                  height: "50px",
                  width: "586px",
                  paddingLeft: "10px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                // onChange={handleNameChange}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <label className="grid pr-6">
              Product Catagory
              <select
                id="label"
                name="label"
                class="outline-none rounded"
                style={{
                  height: "50px",
                  width: "590px",
                  paddingLeft: "5px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={label}
                onChange={handleLabelChange}
              >
                <option value="">Select Product Catagory</option>
                <option value="personal">Admin</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="grid pr-6">
              Number Of Inventory
              <select
                id="label"
                name="label"
                class="outline-none rounded"
                style={{
                  height: "50px",
                  width: "590px",
                  paddingLeft: "5px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={label}
                onChange={handleLabelChange}
              >
                <option value="">Select Number Of Inventory</option>
                <option value="personal">Admin</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <label className="grid mt-5" style={{ fontSize: "15px" }}>
              Photos
              <input
                class="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                style={{ border: "2px solid #e6f7fe", width: "450px" }}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                placeholder=""
              />
            </label>
          </div>
          <div style={{ width: "600px", marginTop:"10px" }}>
              {images && images.length > 0 && (
                <div className="grid grid-cols-6 gap-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url} // replace with your image source
                      alt={image.name} // replace with your image alt text
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // set width, height, object-fit, and margin-right styles
                    />
                  ))}
                </div>
              )}
            </div>
          <div style={{ fontSize: "10px", marginTop: "8px" }}>
            <ul className="list-disc ml-3 text-gray-500">
              <li>Allowed banner image extension .jpg | .jpeg | .png</li>
              <li>
                Max banner image file size <a className="text-red-500">5MB</a>
              </li>
              <li>
                Recommended Banner image size{" "}
                <a className="text-red-500">1900px * 700px</a>
              </li>
            </ul>
          </div>

          <label className="grid mt-5">
            Project Details
            <textarea
              id="content"
              placeholder="Enter Details"
              className="rounded outline-none pt-2"
              style={{
                height: "170px",
                width: "1210px",
                border: "2px solid #e6f7fe",
                paddingLeft: "10px",
                paddingTop: "20px",
                fontSize: "15px",
                marginTop: "5px",
              }}
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </label>
          {/* <div> */}
          <button
            className="rounded mt-10"
            style={{
              backgroundColor: "rgba(153, 190, 17, 0.831)",
              width: "170px",
              height: "55px",
              color: "white",
            }}
            type="submit"
          >
            Publish
          </button>
          <button
            className="rounded mt-10"
            style={{
              backgroundColor: "black",
              width: "170px",
              height: "55px",
              color: "white",
              marginLeft: "30px",
            }}
            type="submit"
          >
            Draft
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
