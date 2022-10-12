import React from "react";
import ProCart from "../../assets/images/icons/pro_cart.svg";
import EditICon from "../../assets/images/icons/edit.svg";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Link } from "react-router-dom";
import textToUrl from "../../util/textToUrl";
import axios from "axios";

dayjs.extend(localizedFormat);

export default function ProductType4({ x, index }) {
  const delete_pd = () => {
    axios
      .get(`/delete/${x.id}`)
      .then(() => {
        window.location.href = "/manage-products";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr className="pro-gl-content">
      <th scope="row">
        <span>{index + 1}</span>
      </th>
      <td>
        <img className="prod-img" src={x.product_image} alt="product image" />
      </td>
      <td>
        <Link to={`/p/${x.id}/${textToUrl(x.product_name)}`}>
          <span>{x.product_name}</span>
        </Link>
      </td>
      <td>
        <span>{dayjs(x.created_at).format("LL")}</span>
      </td>
      <td>
        <span>R{x.price}</span>
      </td>

      <td>
        <span className="tbl-btn">
          <Link
            className="btn btn-lg btn-light"
            to={`/edit-product/${x.id}`}
            title="Edit product"
          >
            <img src={EditICon} className="svg_img pro_svg" alt="" />
          </Link>
          <a
            onClick={delete_pd}
            className="btn btn-lg btn-primary ec-com-remove ec-remove-wish"
            href="javascript:void(0)"
            title="Remove"
          >
            ×
          </a>
        </span>
      </td>
    </tr>
  );
}
