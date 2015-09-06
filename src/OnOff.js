/**
 * OnOff Component for tinglejs
 */
var classnames = require('classnames');
class OnOff extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     on:t.this.props.on
        // }
    }
    /*
    * options
    */
    handleChange() {
        let t =this;
        t.props.onChange(!t.props.on)
    }

    render() {
        let t= this;
        let classSet ={
            "tOnOffPannel":true,
            "tOn":t.props.on,
            [t.props.className]: !!t.props.className
        };
        return (
            <div ref="root" className={classnames(classSet)} onClick={t.handleChange.bind(this)}><div className="tOnOffRadius"></div></div>
        );
    }
}

OnOff.defaultProps = {
    on:true,
    onChange:function(){}
}

// http://facebook.github.io/react/docs/reusable-components.html
OnOff.propTypes = {
    on:React.PropTypes.bool,
    onChange:React.PropTypes.func
}

module.exports = OnOff;