import React from "react";
import Navigation from "./layout/Navigation";
import ActiveForms from "./layout/ActiveForms";
import FormsContainer from "./layout/FormsContainer"

// import update from 'react-addons-update';

class AppContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            forms: {
                login: {
                    label: "form1",
                    fields: {
                       email: "",
                       password: "",
                       rememberMe: false
                    },
                    visibility: false
                },
                address: {
                    label: "form2",
                    fields: {
                        address1: "",
                        address2: "",
                        city: "",
                        country: "",
                        zip: ""
                    },
                    visibility: false
                },
                profile: {
                    label: "form3",
                    fields: {
                        firstName: "",
                        lastName: "",
                        gender: ""
                    },
                    visibility: false
                }
            },
            activeTab: ""
        }
    }

    handleButtonClick = (event) => {
        const {name} = event.target

        this.setState(prevState => {
            let forms = Object.assign({}, prevState.forms);

            //resetting form
            switch(name) {
                case 'login':
                    forms[name].fields.email = "";
                    forms[name].fields.password = "";
                    forms[name].fields.rememberMe = false;
                    break;
                case 'address':
                    forms[name].fields.address1 = "";
                    forms[name].fields.address2 = "";
                    forms[name].fields.city = "";
                    forms[name].fields.country = "";
                    forms[name].fields.zip = "";
                    break;
                case 'profile':
                    forms[name].fields.firstName = "";
                    forms[name].fields.lastName = "";
                    forms[name].fields.gender = "";
                    break;
                default:
                    return
            }
            forms[name].visibility = true;

            return {forms, activeTab: name}
        })
    }

    switchTab = (tabIndex) => {
        this.setState({
            activeTab: tabIndex
        })
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        const formName = event.target.getAttribute('data-form')

        type === "checkbox" ?
            this.setState(prevState => {
                let forms = Object.assign({}, prevState.forms);
                forms[formName].fields[name] = checked;
                return { forms };
            })
            :
            this.setState(prevState => {
                let forms = Object.assign({}, prevState.forms);
                forms[formName].fields[name] = value;
                return { forms };
            })
    }

    render() {
        return (
            <main>
                <Navigation className="bg-info" handleButtonClick={this.handleButtonClick} buttons={this.state.forms}/>
                <ActiveForms data={this.state} switchTab={this.switchTab}/>
                {
                    this.state.activeTab !== '' ?
                        <FormsContainer forms={this.state.forms} activeTab={this.state.activeTab} handleChange={this.handleChange}/> :
                        ''
                }
            </main>
        )
    }
}

export default AppContainer