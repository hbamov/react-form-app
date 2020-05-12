import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProfileForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="formFirstName">
                    <Form.Label column sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="firstName"
                            data-form="profile"
                            placeholder="Enter First Name"
                            value={this.props.inputs.fields.firstName}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Last Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="lastName"
                            data-form="profile"
                            placeholder="Enter Last Name"
                            value={this.props.inputs.fields.lastName}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Gender
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                id="gender1"
                                data-form="profile"
                                value="male"
                                checked={this.props.inputs.fields.gender === 'male'}
                                onChange={this.props.handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                id="gender2"
                                data-form="profile"
                                value="female"
                                checked={this.props.inputs.fields.gender === 'female'}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
            </Form>
        )
    }
}

export default ProfileForm