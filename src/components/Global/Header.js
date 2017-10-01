//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';//para propiedades q vamos a recivir

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const {title,items} = this.props;
        /*
        or
        const title = this.props.title;
        const items = this.props.items;
        */

        // var itemsl =items.map((item,key)=>{
        //     return(
        //         <li key={key}>{item.title}</li>
        //     )
        // })



        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} alt="react logo" />
                    <h2>{title}</h2>
                    <ul className="menu">
                        {items && items.map((item,key) => <li key={key} >{item.title}</li>)}
                    </ul>

                </div>


            </div>
        );
    }
}

export default Header;
