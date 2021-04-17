import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ users }) => {
  return (
    <div className='row'>
      {users.map((user) => (
        <ContactCard user={user} key={user._id} />
      ))}
    </div>
  );
};

export default ContactList;
