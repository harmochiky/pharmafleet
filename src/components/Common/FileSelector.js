import React, { useState } from "react";

export default function FileSelector() {
  const [filename, setFileName] = useState();

  const sub_form = () => {};
  return (
    <div className="input-i">
      <span>Choose file</span>
    </div>
  );

  return <input type="file" />;
}
