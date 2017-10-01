//DEPENDENCIAS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//COMPONENTES
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data 
import items from '../data/menu';


class App extends Component {
    static propTypes ={
        children:PropTypes.object.isRequired
    }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header 
          title="Code" 
          items={items}
        />
        <Content body={children} />
        <Footer copyright=" &copy; Code 2017" />
      </div>

    );
  }
}

export default App;
