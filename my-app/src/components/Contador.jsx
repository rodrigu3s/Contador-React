import React from 'react'
import './Contador.css'

export default class Contador extends React.Component {

    state = {
        contador: 0
    }


    dec = () => {
        this.setState({
            contador: this.state.contador - 1,
        })

    }

    inc = () => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }


    render() {
        return (
            <div className="Container">

                <h1>Contador</h1>

                <div className="box">
                   <div>
                        <h2>{this.state.contador}</h2>
                   </div>
                   
                    
                    <div className="botao">
                        <button onClick={this.dec}> <i className="fas fa-minus"></i> </button>
                        <button onClick={this.inc}> <i className="fas fa-plus"></i> </button>
                    </div>
                    
                </div>

            </div>
        )
    }
}