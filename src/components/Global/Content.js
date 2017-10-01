import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
    constructor() {
        super();
        //unicamente en el constructor
        this.state = {
            count: 0,
            n1: 0,
            n2: 0,
            result:0
        };
        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //componentes del flujo de vida de Rect
    componentDidMount() {
        this.setState({
            count: 1,
        })
    }
    handleCountClick(e) {
        if (e.target.id === "add") {
            this.setState({
                count: this.state.count + 1
            })
        } else if (e.target.id === "subs") {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            this.setState({
                count: 0
            })
        }
    }
    handleResultClick(e) {
        this.setState({
            result:this.state.n1 + this.state.n2
        })
    }
    handleInputChange(e) {
        if(e.target.id === 'n1'){
            this.setState({
                n1: Number(e.target.value)
            });
        }else{
            this.setState({
                n2:Number(e.target.value)
            });
        }
    }

    render() {
        return (
            <div className="Content">
                <h2> Contenido Component</h2>
                <p>Contador : {this.state.count}</p>

                <p>
                    <button id="add" onClick={this.handleCountClick}>+</button>
                    <button id="subs" onClick={this.handleCountClick}>-</button>
                    <button id="reset" onClick={this.handleCountClick}>Reset</button>
                </p>

                <h2>Calculadora</h2>
                <input id="n1" type="number" value={this.state.n1} onChange={this.handleInputChange} />
                <br/>+<br/>
                <input id="n2" type="number" value={this.state.n2} onChange={this.handleInputChange} />
                <br/><br/><button id="result" onClick={this.handleResultClick} > = </button> 
                 <br/><br/>{this.state.result}
            </div>
        );
    }
}

export default Content;