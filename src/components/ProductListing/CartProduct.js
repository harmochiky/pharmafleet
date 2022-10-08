import React from "react";

const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function CartProduct() {
  return (
    <tr>
      <td data-label="Product" className="ec-cart-pro-name">
        <a href="product-left-sidebar.html">
          <img className="ec-cart-pro-img mr-4" src={Img} alt="" />
          Stylish Baby Shoes
        </a>
      </td>
      <td data-label="Price" className="ec-cart-pro-price">
        <span className="amount">R56.00</span>
      </td>
      <td
        data-label="Quantity"
        className="ec-cart-pro-qty"
        style={{ textAlign: "center" }}
      >
        <div className="cart-qty-plus-minus">
          <input
            className="cart-plus-minus"
            type="text"
            name="cartqtybutton"
            defaultValue={1}
          />
        </div>
      </td>
      <td data-label="Total" className="ec-cart-pro-subtotal">
        $56.00
      </td>
      <td data-label="Remove" className="ec-cart-pro-remove">
        <a href="#">
          <i className="ecicon eci-trash-o" />
        </a>
      </td>
    </tr>
  );
}
