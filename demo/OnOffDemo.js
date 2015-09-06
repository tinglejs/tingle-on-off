
var OnOff = require('../src');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on1:true,
            on2:false
        }
    }

    handleChange (form,on){
        console.log(arguments)
        // debugger;
        this.setState({
            [form]:on
        });

    }

    render() {
        return (
            <div>
                <OnOff on={this.state.on1} onChange={this.handleChange.bind(this,"on1")}/>
                <OnOff on={this.state.on2} onChange={this.handleChange.bind(this,"on2")}/>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));