import React from 'react';
// import PropTypes from 'prop-types';
import './Header.sass';
import Input from "./Input";
import Btn from "../UI/Btn";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit(e) {
        console.log(this.state.text);
        e.preventDefault();
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form className='header container' onSubmit={this.handleSubmit}>
                <Input type={'text'} value={this.state.text} onChange={this.handleChange} placeholder={'Добавить задачу...'}/>
                <Btn>Добавить</Btn>
            </form>
        );
    }

};

Header.propTypes = {

};

export default Header;
