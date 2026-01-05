import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project() {
  return (
    <div>
      <h1 id='project' style={{ textAlign: "center", fontSize: "40px", paddingTop: "30px", fontFamily: "fangsong" }}>Projects</h1>
      <Row xs={1} md={3} className="g-5" style={{ margin: "60px" }}>

        <Col>
          <Card className="h-100 shadow">
            <Card.Img variant="top" src="https://www.reactiondistributing.com/wp-content/uploads/2022/03/1-An-Overview-To-Waste-Management-System-.jpg" alt="Garbage Management System" style={{ height: "400px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Garbage Management System</Card.Title>
              <Card.Text>
                A web application to manage waste collection efficiently.
                Users can request garbage pickup, register complaints,
                and track service status online. Admin manages staff,
                areas, and pickup schedules.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100 shadow">
            <Card.Img
              variant="top"
              src="https://woovina.com/images/2020/07/25/best-ecommerce-website-templates.jpg"
              alt="E-Commerce Website"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>E-Commerce Website</Card.Title>
              <Card.Text>
                An online shopping platform where users can browse products,
                add items to cart, place orders, and complete purchases
                through a simple and user-friendly interface.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

<Col>
  <Card className="h-100 shadow">
    <Card.Img
      variant="top"
      src="https://img.freepik.com/premium-vector/cartoon-illustration-bookstore-with-open-book-sign_1203312-2470.jpg?w=360"
      alt="Book Shop Website"
      style={{ height: "400px", objectFit: "cover" }}
    />
    <Card.Body>
      <Card.Title>Book Shop Website</Card.Title>
      <Card.Text>
        An online book store where users can browse books by category,
        view book details, add books to cart, and place orders easily.
        The system provides a simple and user-friendly shopping experience.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>


      </Row>

    </div>
  )
}

export default Project
