import React, { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import AddContact from "./AddContact";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Contact List</Navbar.Brand>
        <Button variant="primary" onClick={handleShow}>
          Add Contact
        </Button>
      </Navbar>
      <AddContact show={show} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
