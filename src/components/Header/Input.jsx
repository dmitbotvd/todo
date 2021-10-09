import React from 'react';
// import PropTypes from 'prop-types';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {type, name, value, onChange, placeholder} = this.props;
        return (
            <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder}/>
        );
    }
};

Input.propTypes = {

};

export default Input;
