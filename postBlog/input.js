import React from "react";

function Input({sendData, title1, desc}) {
  const handleTitleChange = (e) => {
    sendData(e.target.value, desc);
  };
  const handleDescChange = (e) => {
    sendData(title1, e.target.value);
  };
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={title1} data-testid="title-input" onChange={handleTitleChange} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={desc} data-testid="description-input" onChange={handleDescChange} />
    </div>
  );
}

export default Input;
