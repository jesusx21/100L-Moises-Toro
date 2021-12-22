import React, {Component} from "react";
import Formulario from "./Formulario";
import Formulario2 from "./Formulario2";
import Formulario3 from "./Formulario3";

class Contenido extends Component{

    render(){

        return (
            <div className="contenido">
                <div id="contenedor2">
                    <div id="subcontenedor2">
                        <h2></h2>
                    </div>

                    <div id="subcontenedor3">
                        <Formulario3/>
                    </div>
                </div> 
            </div>
        );
    }

}

export default Contenido;