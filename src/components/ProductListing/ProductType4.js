import React from "react";
import ProCart from "../../assets/images/icons/pro_cart.svg";
import EditICon from "../../assets/images/icons/edit.svg";

const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function ProductType4() {
  return (
    <tr className="pro-gl-content">
      <th scope="row">
        <span>1</span>
      </th>
      <td>
        <img className="prod-img" src={Img} alt="product image" />
      </td>
      <td>
        <span>Stylish baby shoes</span>
      </td>
      <td>
        <span>16 Jul 2021</span>
      </td>
      <td>
        <span>$65</span>
      </td>

      <td>
        <span className="tbl-btn">
          <a
            className="btn btn-lg btn-light"
            href="javascript:void(0)"
            title="Edit product"
          >
            <img src={EditICon} className="svg_img pro_svg" alt="" />
          </a>
          <a
            className="btn btn-lg btn-primary ec-com-remove ec-remove-wish"
            href="javascript:void(0)"
            title="Remove From List"
          >
            ×
          </a>
        </span>
      </td>
    </tr>
  );
}
