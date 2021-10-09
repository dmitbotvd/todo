import React from 'react';
// import PropTypes from 'prop-types';
import List from "./List";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'container'}>
                <List>Задача номер 1</List>
                <List>Задача номер 2</List>
            </div>
        );
    }
};

Task.propTypes = {

};

export default Task;
