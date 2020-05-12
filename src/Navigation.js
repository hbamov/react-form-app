import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

class Navigation extends React.Component {
    render() {
        return <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Form-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        Object.entries(this.props.buttons).map(([key,value],index) =>
                            <Nav.Link
                                name={key}
                                key={key}
                                data-index={key}
                                onClick={this.props.handleButtonClick}
                            >{key}</Nav.Link>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default Navigation