import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topnavbar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" style={styles.heading}>PORTFOLIO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={styles.contents}>Home</Nav.Link>
                        <Nav.Link href="#about" style={styles.contents}>About</Nav.Link>
                        <Nav.Link href="#project" style={styles.contents}>Project</Nav.Link>
                        <Nav.Link href="#skills" style={styles.contents}>Skills</Nav.Link>
                        <Nav.Link href="#contact" style={styles.contents}>Contact</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topnavbar
const styles = {
    heading : {
        fontSize : "40px",
        fontFamily : "fantacy",
        textShadow : '5px 2px 7px black'

    },
    contents : {
        fontSize:"20px",
        fontWeight: "600",
        paddingLeft : "10px",
    }
}
