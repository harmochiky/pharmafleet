import React from "react";
import Logo from "../../assets/img/logo.png";

export default function SidePanel() {
  const menu_items = [
    {
      title: "Profile",
    },
    {
      title: "Products",
    },
    {
      title: "Orders",
    },
  ];
  return (
    <div className="nav-side">
      <div className="nav-container">
        <div className="py-5 text-center">
          <img src={Logo} alt="" className="img-fluid logo" />
        </div>
        <div className="nav-contents pt-3 px-2">
          <ul>
            {menu_items.map((x, index) => (
              <li key={index}>{x.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
}
