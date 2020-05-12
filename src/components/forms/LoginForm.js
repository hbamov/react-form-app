import React from "react";
import Form from "react-bootstrap/Form";

class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        data-form="login"
                        placeholder="Enter email"
                        value={this.props.inputs.fields.email}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        data-form="login"
                        placeholder="Password"
                        value={this.props.inputs.fields.password}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="rememberMe"
                        data-form="login"
                        label="Remember Me"
                        checked={this.props.inputs.fields.rememberMe}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
            </Form>
        )
    }
}

export default LoginForm