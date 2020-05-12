import React from "react";
import Navigation from "./Navigation";
import ActiveForms from "./ActiveForms";
import FormsContainer from "./FormsContainer"

// import update from 'react-addons-update';

class AppContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            forms: {
                login: {
                    fields: {
                       email: "",
                       password: "",
                       rememberMe: false
                    },
                    visibility: false
                },
                address: {
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
                    fields: {
                        firstName: "",
                        lastName: "",
                        gender: ""
                    },
                    visibility: false
                },
            },
            activeTab: ""
        }
    }

    handleButtonClick = (event) => {
        const {name} = event.target

        this.setState(prevState => {
            let forms = Object.assign({}, prevState.forms);
            console.log(name)
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
            console.log(forms)
            return {forms, activeTab: name}
        })
    }

    switchTab = (tabIndex) => {
        console.log(tabIndex)
        this.setState({
            activeTab: tabIndex
        })
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        const formName = event.target.getAttribute('data-form')
        console.log(formName, checked)

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
                <Navigation handleButtonClick={this.handleButtonClick} buttons={this.state.forms}/>
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