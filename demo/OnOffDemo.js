/**
 * OnOff Component Demo for tingle
 * @author ruiyang.dry
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let OnOff = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on1: true,
            on2: false,
            on3: false
        }
    }

    handleChange(from, on) {
        this.setState({
            [from]: on
        });
    }

    render() {
        return (
            <div>
                <OnOff on={this.state.on1} onChange={this.handleChange.bind(this, "on1")}/>
                <OnOff on={this.state.on2} onChange={this.handleChange.bind(this, "on2")}/>
                <OnOff on={this.state.on3} readOnly={true} onChange={this.handleChange.bind(this, "on3")}/>
            </div>
        );
    }
}

React.render(<Demo/>, document.getElementById('TingleDemo'));