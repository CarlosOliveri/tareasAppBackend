"use client"
import React from 'react';

const Tarea = (props) =>{
    return(
        <article className='tareaContainer'>
            <div className='tareaContainer-Tarea'>{props.tarea}</div>
            <div>Proyecto: <p className='tareaContainer-propiedadTarea'>{props.proyecto}</p></div>
            <div>Fecha limite: <p className='tareaContainer-propiedadTarea'>{props.fecha}</p></div>
            <div>Prioridad: <p className='tareaContainer-propiedadTarea'>{props.prioridad}</p></div>
        </article>
    );
}
export default Tarea;