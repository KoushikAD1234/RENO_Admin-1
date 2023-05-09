import { useEffect, useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProject } from "../../User_Management/features/userSlice";
import { Link } from "react-router-dom";

const EditProduct = ({ setExpand, setActiveTab }) => {
  // setExpand("homeService");
  setActiveTab("productList");
  const head = "Edit Product";
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [pack, setPack] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [inventory, setInventory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("prod_name", title);
    formData.append("details", content);
    formData.append("rate", pack);
    formData.append("inv_count", inventory);
    formData.append("prod_category", productCategory);
    formData.append("proj_category", category);
    images.map((image, index) => {
      formData.append("pic_url", image);
    });

    dispatch(updateProject({ formData, title }));
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      uploadedImages.push(files[i]);
    }
    setImages(uploadedImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    // fileInputRef.current.value = newImages.length;
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };
  const handleInventoryChange = (event) => {
    setInventory(event.target.value);
  };

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div className=" ml-80 mb-10 relative" style={{ marginTop: "120px" }}>
        <form onSubmit={handleSubmit}>
          <label className="grid mt-5">
            Product Title
            <input
              type="text"
              placeholder="Enter Title"
              id="title"
              className="rounded outline-none w-[100vh]"
              style={{
                height: "50px",
                paddingLeft: "10px",
                backgroundColor: "#e5ecff",
                marginTop: "5px",
                fontSize: "15px",
              }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <div className="grid grid-cols-2 gap-2 mt-5">
            <label className="grid">
              Catagory
              <select
                id="label"
                name="label"
                class="outline-none rounded w-[49vh]"
                style={{
                  height: "50px",
                  paddingLeft: "5px",
                  backgroundColor: "#e5ecff",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={category}
                onChange={handleCategoryChange}>
                <option value="">Select Catagory</option>
                <option value="personal">Admin</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="grid">
              Package
              <input
                type="text"
                value={pack}
                class="outline-none w-[49vh] rounded"
                placeholder="$000.00"
                style={{
                  height: "50px",
                  paddingLeft: "10px",
                  backgroundColor: "#e5ecff",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                onChange={(event) => setPack(event.target.value)}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <label className="grid">
              Product Catagory
              <select
                id="label"
                name="label"
                class="outline-none w-49vh rounded"
                style={{
                  height: "50px",
                  paddingLeft: "5px",
                  backgroundColor: "#e5ecff",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={productCategory}
                onChange={handleProductCategoryChange}>
                <option value="">Select Product Catagory</option>
                <option value="personal">Admin</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="grid">
              Number Of Inventory
              <select
                id="label"
                name="label"
                class="outline-none w-[49vh] rounded"
                style={{
                  height: "50px",
                  paddingLeft: "5px",
                  backgroundColor: "#e5ecff",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={inventory}
                onChange={handleInventoryChange}>
                <option value="">Select Number Of Inventory</option>
                <option value="personal">1</option>
                <option value="work">2</option>
                <option value="other">3</option>
              </select>
            </label>
          </div>

          <label className="grid pr-6" style={{ marginTop: "20px" }}>
            Photos
            <div style={{ width: "600px", marginTop: "10px" }}>
              {images && images.length > 0 ? (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }}
                      />
                      <button
                        className="absolute top-0 text-white"
                        style={{ right: 46 }}
                        onClick={() => handleRemoveImage(index)}>
                        <DisabledByDefaultRoundedIcon style={{ fill: "red" }} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  style={{
                    height: "48px",
                    width: "390px",
                    paddingLeft: "0px",
                    border: "2px solid 	#e6f7fe",
                    marginTop: "5px",
                    fontSize: "14px",
                  }}
                  class="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  placeholder=""
                />
              )}
            </div>
          </label>
          <div className="text-md mt-8">
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
              className="rounded w-[100vh] outline-none pt-2"
              style={{
                height: "170px",
                backgroundColor: "#e5ecff",
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
          {/* </div> */}
        </form>
          <button
            className="rounded bg-lime-600 hover:bg-lime-700 mt-10"
            style={{
              width: "170px",
              height: "55px",
              color: "white",
            }}
            type="submit"
            onSubmit={handleSubmit}>
            Save
          </button>
          <button
            className="rounded bg-black hover:bg-gray-800 mt-10"
            style={{
              width: "170px",
              height: "55px",
              color: "white",
              marginLeft: "30px",
            }}
            type="submit">
            <Link to='/home/productList'>Cancel</Link>
          </button>
      </div>
    </div>
  );
};

export default EditProduct;
