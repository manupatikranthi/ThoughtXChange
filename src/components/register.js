import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Register(props) {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState();
  const [fullName, setFullName] = React.useState();
  const [age, setAge] = React.useState();
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  const handleClose = () => {
    setShow(false);
    props.updateParent(false);
  };
  const handleShow = () => setShow(true);

  const handleFormSubmit = (event) => {
    const userData = {
      Email: email,
      FullName: fullName,
      Age: parseInt(age),
      Credential: { UserName: userName, Password: password },
    };
    console.log("Testing the object: ", userData);

    // The api call to post details
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="registrationForm">
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                onChange={(event) => setFullName(event.target.value)}
                value={fullName}
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
