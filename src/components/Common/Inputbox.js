import React from "react";
import PropTypes from "prop-types";

export default function Inputbox({ type, placeholder, buttonText }) {
  const on_submit = (e) => {
    e.preventDefault();
  };

  if (type == "with-text-btn") {
    return (
      <div className="input-wrapper">
        <form onSubmit={on_submit} className="with-btn-container m-auto">
          <input className="text-input" placeholder={placeholder} />
          <button className="submit-btn">{buttonText}</button>
        </form>
      </div>
    );
  }

  Inputbox.propTypes = {
    type: PropTypes.oneOf(["default", "with-icon-btn", "with-text-btn"])
      .isRequired,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string,
  };
  return null;
}
