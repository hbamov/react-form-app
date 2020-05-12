import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class AddressForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address1"
                        data-form="address"
                        placeholder="1234 Main St"
                        value={this.props.inputs.fields.address1}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                        name="address2"
                        data-form="address"
                        placeholder="Apartment, studio, or floor"
                        value={this.props.inputs.fields.address2}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            name="city"
                            data-form="address"
                            value={this.props.inputs.fields.city}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            as="select"
                            name="country"
                            data-form="address"
                            value={this.props.inputs.fields.country}
                            onChange={this.props.handleChange}
                        >
                            <option value="">Choose Country</option>
                            <option value="germany">Germany</option>
                            <option value="spain">Spain</option>
                            <option value="france">France</option>
                            <option value="italy">Italy</option>
                            <option value="poland">Poland</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            name="zip"
                            data-form="address"
                            value={this.props.inputs.fields.zip}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }
}

export default AddressForm