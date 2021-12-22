import React, {Component} from "react";
import googlelogo from '../img/google.png';
import fblogo from '../img/facebook-logo-0.png';
import mslogo from '../img/732221.png';


class Formulario extends Component{

    render(){

        return (
            <div id="formulario">
                <h2>Crear tu cuenta</h2>
                <p>Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro <a href="#"><span className="azul">Aviso de Privacidad, Derechos Arco</span></a> y nuestros <a href="#"><span className="azul">Términos y Condiciones</span></a>.</p>
                <div id="formDef">
                    <form action="POST">
                        <label className="labels" htmlFor="correo">¿Cuál es tu correo electrónico?</label>
                        <input type="email" placeholder={"tu@correo.com"} name="correo"/>

                        <label className="labels" htmlFor="contraseña">Ingresa una contraseña</label>
                        <input type="password" placeholder={"Contraseña"} name="contrasena" required/>

                    </form>
                </div>
                
                <p id="p1">o registrate con:</p>

                <div id="redes">
                    <div className="caja"><a href="https://accounts.google.com/signin"><img src={googlelogo} alt="Google logo" /></a></div>
                    <div className="caja"><a href="https://login.live.com/login.srf?wa=wsignin1.0rpsnv=13ct=1640146960rver=7.0.6737.0wp=MBI_SSLwreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d42eac7d7-becc-39bb-aa60-aa7eff88e0cbid=292841aadredir=1CBCXT=outlw=1fl=dob%2cflname%2cwldcobrandid=90015"><img src={mslogo} alt="Microsoft logo" /></a></div>
                    <div className="caja"><a href="https://www.facebook.com/login/"><img src={fblogo} alt="Facebook logo" /></a></div>
                </div>
            </div>
           
        );
    }

}

export default Formulario;