import React, { Component } from 'react';
import './css/Footer.css';

//agregamos dependencia props
import PropTypes from 'prop-types';

class Footer extends Component {
    //agregamos los datos staticos
    static protoTypes = {
        copyright: PropTypes.string,
    };

    render() {
        //parametros por defecto
        const { copyright = "&copy; React2017" } = this.props;
        return (
            <div className="Footer">

                <h2>{copyright}</h2>

            </div>
        );
    }
}

export default Footer;
