import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
    <div id="contact" style={{ paddingTop: "120px" }}>

      <div>
        <h1 style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "fangsong"
        }}>
          Contact
        </h1>
        <p style={{ textAlign: "center", fontFamily: "cursive" }}>
          Feel free to get in touch.
        </p>
      </div>

      <div style={{
        maxWidth: "100%",
        backgroundColor: "grey",
        padding: "50px 0"
      }}>

        <div style={{
          width: "80%",
          backgroundColor: "#3d3a32",
          margin: "auto",
          padding: "80px 0",
          borderRadius: "10px"
        }}>

          <Form className="container" style={{ maxWidth: "800px" }}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter Your Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Your Address" />
            </Form.Group>

            <div className="text-center">
              <Button variant="outline-success" size="lg">
                Submit
              </Button>
            </div>
          </Form>

        </div>
      </div>

    </div>
  )
}

export default Contact
