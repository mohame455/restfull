import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../js/action";
import AddContact from "./AddContact";

const ContactCard = ({ user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <span>{user.name[0].toUpperCase()}</span>
        <Card.Body>
          <Card.Title>{user.name + " " + user.lastName} </Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Button
            variant="primary"
            onClick={() => dispatch(deleteUser(user._id))}
          >
            Delete
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
        </Card.Body>
      </Card>
      <AddContact
        isUpdated={true}
        user={user}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContactCard;
