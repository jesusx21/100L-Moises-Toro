import React, {Component} from "react";


class Formulario2 extends Component{
    render(){

        return (
            <div id="formulario">
                <div id="formDef" className="formDef2">
                    <form action="POST">
                        <label className="label1" htmlFor="numero">¿Cuál es tu numero celular?</label>
                        <input type="text" placeholder={"33 3335 5555"} name="number"/>
                    </form>

                    <div id="botonarea">
                        <button class="botones">Anterior</button>
                        <button class="botones">Siguiente</button>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Formulario2;