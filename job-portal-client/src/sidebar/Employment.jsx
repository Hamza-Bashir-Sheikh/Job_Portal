import React from "react";
import InputFiled from "../components/inputFiled";

const Employment = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Employment Type</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>

        <InputFiled
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputFiled
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputFiled
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
};

export default Employment;
