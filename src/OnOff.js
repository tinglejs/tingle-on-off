/**
 * OnOff Component for tingle
 * @author ruiyang.dry
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let classnames = require('classnames');
class OnOff extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange() {
        let t = this;
        if (t.props.readOnly) {
            return;
        }
        t.props.onChange(!t.props.on)
    }

    render() {
        let t = this;
        let classSet = {
            "tOnOffPanel": true,
            "tOn": t.props.on,
            "readOnly": t.props.readOnly,
            [t.props.className]: !!t.props.className
        };
        return (
            <div ref="root" className={classnames(classSet)} readOnly={t.props.readOnly} onClick={t.handleChange.bind(this)}>
                <div className="tOnOffBack">
                    <div className="tOnOffRadius"></div>
                </div>
            </div>
        );
    }
}

OnOff.defaultProps = {
    on: true,
    onChange() {
    },
    readOnly: false
};

// http://facebook.github.io/react/docs/reusable-components.html
OnOff.propTypes = {
    on: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool
};

OnOff.displayName = "OnOff";

module.exports = OnOff;