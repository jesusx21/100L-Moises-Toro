import React, {Component} from "react";


class Formulario3 extends Component{
    render(){

        return (
            <div id="formulario" className="form3">
                <h2>¿Cómo te llamas?</h2>
                <div id="formDef" className="formDef3">
                    <form action="POST">
                        <label className="label1" htmlFor="primerNombre">Primer nombre</label>
                        <input type="text" placeholder={"Primer nombre"} name="primerNombre"/>

                        <label className="label1" htmlFor="segundoNombre">Segundo nombre (Opcional)</label>
                        <input type="text" placeholder={"Segundo nombre"} name="segundoNombre"/>

                        <label className="label1" htmlFor="primerApellido">Primer apellido</label>
                        <input type="text" placeholder={"Primer apellido"} name="primerApellido"/>

                        <label className="label1" htmlFor="segundoApellido">Segundo apellido</label>
                        <input type="text" placeholder={"Segundo apellido"} name="segundoApellido"/> 
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

export default Formulario3;