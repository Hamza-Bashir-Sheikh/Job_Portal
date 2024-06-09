import React from 'react'
import InputFiled from '../components/inputFiled'

const workExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any experience
      </label>

      <InputFiled
        handleChange={handleChange}
        value="Internship"
        title="Internship"
        name="test"
      />
      <InputFiled
        handleChange={handleChange}
        value="Work remotely"
        title="Work remotely"
        name="test"
      />
    </div>
  </div>
  )
}

export default workExperience