import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchContainer() {
  return (
    <div className="search-container">
      <input placeholder="Search PharmaFleet..." className="search-bar" />
      <button>
        <BiSearch />
      </button>
    </div>
  );
}
