import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Mapping = () => {
  return (
    <div className="bg-fadewhite h-screen ml-1 p-10">
      <div className="max-h-screen bg-gray-100 p-8">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="123-456-7890" />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Mapping;
