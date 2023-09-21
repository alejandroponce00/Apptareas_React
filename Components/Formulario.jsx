'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import './Formulario.css';

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (datos) => {
        console.log(datos);
    }

    return <div className="registro_usuario">
        <div className="titulo">
            <h1>Nuevo usuario</h1>
        </div>
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <div className="div_input">
                <label>Nombre</label>
                <input type='text'
                    {...register('nombre', {
                        required: true,
                        minLength: 3,
                        maxLength: 10,
                    })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'minLength' && <p>Ingrese como minimo tres caracteres</p>}
                {errors.nombre?.type === 'maxLength' && <p>Ingrese como máximo 10 caracteres</p>}
            </div>

            <div className="div_input">
                <label>Apellido</label>
                <input type='text'
                    {...register('apellido', {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                    })} />
                {errors.apellido?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.apellido?.type === 'minLength' && <p>Ingrese como minimo tres caracteres</p>}
                {errors.apellido?.type === 'maxLength' && <p>Sobrepasó el límite de caracteres</p>}
            </div>

            <div className="div_input">
                <label>Email</label>
                <input type='email'
                    {...register('email', {
                        pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                        required: true,
                    })} />
                {errors.email?.type === 'pattern' && <p> Introduce un email valido </p>}
                {errors.email?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div>

            <div className="div_input">
                <label>Contraseña</label>
                <input type='text'
                    {...register('contraseña', {
                        minLength: 8,
                        required: true,
                    })} />
                {errors.contraseña?.type === 'minLength' && <p> Introduce como minimo 8 caracteres</p>}
                {errors.contraseña?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <input className="boton" type='submit' value='Registrarse' />

        </form>
    </div>
}

export default Formulario;