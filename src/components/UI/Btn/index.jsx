import React from 'react';
// import PropTypes from 'prop-types';
import './Btn.sass';

class Btn extends React.Component {


    render() {
        let {children} = this.props;
        return (
            <button type={'submit'} className={'btn'}>{children}</button>
        );
    }
};

Btn.propTypes = {

};

export default Btn;
