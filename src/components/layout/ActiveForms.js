import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class ActiveForms extends React.Component {
    render() {
        const tabs = Object.entries(this.props.data.forms).map(([key,value],index) =>
              value.visibility ?
                  <Tab
                      eventKey={key}
                      title={value.label}
                      key={key}
                  > </Tab> :
                  ''
        )

        return (
            <Tabs
                activeKey={this.props.data.activeTab}
                id="controlled-tab-example"
                onSelect={this.props.switchTab}
            >
                {
                    tabs
                }
            </Tabs>
        )
    }
}

export default ActiveForms