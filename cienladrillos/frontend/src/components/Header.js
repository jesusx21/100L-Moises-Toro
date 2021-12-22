import React, {Component} from "react";
import logo from '../img/logotipo.svg';

class Header extends Component{

    render(){

        return (
            <div className="header">
                <header id="contenedor">
                    <div id="contenedor1">
                        <div id="contImg">
                            <a href="index.html">
                                <img id="imagen1" src={logo} alt="100 Ladrillos logo"/>
                            </a>
                        </div>
                        <div id="subcontenedor1">
                <nav>
                    <a href="#">Cómo funciona</a>
                    <a href="#">Entrar</a>
                    <a href="#">Registrarme</a>
                </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}

export default Header;