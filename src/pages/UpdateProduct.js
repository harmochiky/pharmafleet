import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";
import UserAccMenu from "../components/Common/UserAccMenu";
import WishlistProduct from "../components/ProductListing/WishlistProduct";
import ProductType4 from "../components/ProductListing/ProductType4";
import departments from "../util/departments.json";
import { uploadImageAsync } from "../util/uploadimage";
import axios from "axios";

export default function UpdateProduct() {
  const params = useParams();

  const [file, setFile] = useState("");
  const [id, setID] = useState("");
  const [loading, set_loading] = useState(true);
  const [data, set_data] = useState({
    product_name: "",
    department: "",
    category: "",
    short_desc: "",
    desc: "",
    price: "",
    moq: " ",
    product_image: "",
  });

  useEffect(() => {
    let id = params.id;
    setID(id);
    getAllProducts(id);
  }, []);

  const getAllProducts = (id) => {
    axios
      .get(`product/${id}`)
      .then((data) => {
        set_data({ ...data, ...data.data });
        set_loading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveProduct = async () => {
    document.getElementById("btn_save").innerHTML = "Updating..";
    document.getElementById("btn_save").disabled = true;

    let image_uri = file ? await uploadImageAsync(file) : "";
    let pr_d = {
      ...data,
      product_image: image_uri ? image_uri : data.product_image,
    };

    axios
      .post(`/update/${id}`, pr_d)
      .then((data) => {
        window.location.href = "/manage-products";
      })
      .catch((err) => {
        console.log(err);

        document.getElementById("btn_save").innerHTML = "update & publish";
        document.getElementById("btn_save").disabled = false;
      });
  };

  function handleImgChange(event) {
    setFile(event.target.files[0]);
  }

  const on_change = (e) => {
    set_data({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <BreadCrums from="Admin" page="Add new" />
      <section className="ec-page-content ec-vendor-uploads ec-user-account wishlist-2 section-space-p">
        <div className="container">
          <div className="row">
            <UserAccMenu />
            <div className="ec-shop-rightside col-lg-9 col-md-12">
              <div className="ec-vendor-dashboard-card">
                <div className="ec-vendor-card-header">
                  <h5 className="text-black">Edit product</h5>
                  <div className="ec-header-btn">
                    {!loading && (
                      <a
                        id="btn_save"
                        onClick={saveProduct}
                        className="btn btn-lg btn-primary badge-pill"
                        href="#"
                      >
                        update & publish
                      </a>
                    )}
                  </div>
                </div>
                <div className="ec-vendor-card-bodr border-0">
                  <div className="ec-register-wrapper">
                    <div className="ec-register-container">
                      <div className="ec-register-form">
                        {loading ? (
                          <div>Loading</div>
                        ) : (
                          <form action="#" method="post">
                            <span className="ec-register-wrap ec-register-full">
                              <label>Product name*</label>
                              <input
                                type="text"
                                name="product_name"
                                placeholder="Name of product"
                                onChange={on_change}
                                required
                                defaultValue={data.product_name}
                              />
                            </span>
                            <span className="ec-register-wrap ec-register-half">
                              <label>category *</label>
                              <span className="ec-rg-select-inner">
                                <select
                                  name="category"
                                  defaultValue={data.category}
                                  onChange={on_change}
                                  id="ec-select-city"
                                  className="ec-register-select"
                                >
                                  <option>Select category</option>
                                  {departments.map((x, index) => (
                                    <optgroup key={index} label={x.dep_name}>
                                      {x.categories.map((c, ci) => (
                                        <option value={c.cat_name} key={ci}>
                                          {c.cat_name}
                                        </option>
                                      ))}
                                    </optgroup>
                                  ))}
                                </select>
                              </span>
                            </span>
                            <span className="ec-register-wrap ec-register-half">
                              <label>Short desc*</label>
                              <input
                                type="text"
                                placeholder="Short description"
                                required
                                name="short_desc"
                                defaultValue={data.short_desc}
                                onChange={on_change}
                              />
                            </span>
                            <span className="ec-register-wrap ec-register-full">
                              <label>Description*</label>
                              <textarea
                                className="border-1"
                                type="textarea"
                                name="desc"
                                defaultValue={data.desc}
                                onChange={on_change}
                                placeholder="Short description"
                                required
                              />
                            </span>
                            <span className="ec-register-wrap mt-2 ec-register-half">
                              <label>Price*</label>
                              <input
                                type="number"
                                name="price"
                                defaultValue={data.price}
                                onChange={on_change}
                                placeholder="Short description"
                                required
                              />
                            </span>
                            <span className="ec-register-wrap mt-2 ec-register-half">
                              <label>MOQ*</label>
                              <input
                                type="number"
                                name="moq"
                                defaultValue={data.moq}
                                onChange={on_change}
                                placeholder="Minimum order quality"
                                required
                              />
                            </span>
                            <span className="ec-register-wrap text-center mt-2 ec-register-half">
                              <label>Current image*</label>
                              <div>
                                <img
                                  className="border p-3"
                                  src={data.product_image}
                                />
                              </div>
                            </span>
                            <span className="ec-register-wrap mt-2 ec-register-half">
                              <label>New image*</label>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImgChange}
                                placeholder="Short description"
                                required
                              />
                            </span>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
