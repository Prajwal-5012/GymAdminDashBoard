import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddCustomer = () => {
  return (
    <div className="bg-fadewhite h-screen ml-1 p-10">
      <div className="max-h-screen bg-gray-100 p-8">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="johndoe@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="123-456-7890" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="123 Main St, Anytown, USA" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Timing</Form.Label>
            <Form.Control type="text" placeholder="6pm - 7pm" />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCustomer;
