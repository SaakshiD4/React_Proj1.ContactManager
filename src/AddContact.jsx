import React, { useState } from "react";

function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setContactData({ ...contactData, name: e.target.value }); //rest contact data will remain same just name will be upadated
    } else {
      setContactData({ ...contactData, email: e.target.value }); //rest contact data will remain same just email will be upadated
    }
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("please fill correct input");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div className="Add">
      <h2 className="AddContact">Add Contact</h2>
      <hr></hr>
      <br />

      <div className="nE">
        <label>Name </label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          width={50}
          value={contactData.name}
          onChange={handleChange}
          className="name"
        ></input>
        <br />
        <label>Email </label>
        <br />
        <input
          className="email"
          type="email"
          placeholder="Enter email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="button">
        <button class="button-71" role="button" onClick={handleAdd}>
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default AddContact;
