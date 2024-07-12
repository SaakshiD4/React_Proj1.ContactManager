import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactList(props) {
  const { contact, removeContact } = props;

  // Check if contact is iterable before mapping
  const contactList =
    contact && contact.length ? (
      contact.map((val) => (
        <div key={val.id}>
          <div className="contactTop">
            <div>
              {val.data.name}
              <div>{val.data.email}</div>
            </div>
            <div>
              <IconButton onClick={() => removeContact(val.id)} className="del">
                <DeleteIcon style={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No contacts found.</div>
    );

  return (
    <div className="conList">
      <div className="con">Contact List</div>
      <div className="List">
        {contactList}
        <hr />
      </div>
      <br />
    </div>
  );
}

export default ContactList;
