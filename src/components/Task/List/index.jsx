import React from 'react';
// import PropTypes from 'prop-types';
import './List.sass';


const List = ({children}) => {
    return (
        <div className={'list'}>
            <div className="checked">
                <input type="checkbox"/>
            </div>
            <div className="task">
                {children}
            </div>
            <div className="like">

            </div>
        </div>
    );
};

List.propTypes = {

};

export default List;
