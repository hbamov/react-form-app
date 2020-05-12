import React from "react";
import Container from "react-bootstrap/Container";

import LoginForm from "../forms/LoginForm";
import AddressForm from "../forms/AddressForm";
import ProfileForm from "../forms/ProfileForm";

class FormsContainer extends React.Component {
    render() {
        return (
            <Container fluid>
                {
                    this.props.forms.login.visibility && this.props.activeTab === 'login' ?
                        <LoginForm
                            inputs={this.props.forms.login}
                            handleChange={this.props.handleChange}
                        ></LoginForm> :
                        null
                }
                {
                    this.props.forms.address.visibility && this.props.activeTab === 'address' ?
                        <AddressForm
                            inputs={this.props.forms.address}
                            handleChange={this.props.handleChange}
                        ></AddressForm>  :
                        null
                }
                {
                    this.props.forms.profile.visibility && this.props.activeTab === 'profile' ?
                        <ProfileForm
                            inputs={this.props.forms.profile}
                            handleChange={this.props.handleChange}
                        ></ProfileForm>  :
                        null
                }
            </Container>
        )
    }
}

export default FormsContainer