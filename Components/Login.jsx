'use client'
import { useState } from "react";
import './Login.css';



export function Login({ setUser }) {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (usuario == "" || contraseña == "") {
            setError(true)
            return
        }
        setError(false)

        setUser([usuario])
    }

    return (

        <section className="login_usuario">
            <div className="titulo">
                <h1>Login</h1>
            </div>

            <div className="formulario">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="div_input">
                        <p className="label">Usuario</p>
                        <input type="text"
                            value={usuario}
                            onChange={event => setUsuario(event.target.value)}
                        />
                    </div>

                    <div className="div_input">
                        <p className="label">Contraseña</p>
                        <input type="password"
                            value={contraseña}
                            onChange={event => setContraseña(event.target.value)}
                        />
                    </div>
                    <button className="boton">Iniciar Sesion</button>

                </form>
                {error && <p id="obligatorio">Todos los campos son obligatorios</p>}

            </div>
        </section>

    )

}
