import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function NameForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="name"
          type="text"
          className="form-control"
          placeholder="Type in a Name"
          id="name"
        />
      </div>
    </form>
  );
}

export default NameForm;
