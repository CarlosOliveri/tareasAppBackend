"use client"
import {React, useState, useEffect} from "react";
import axios from 'axios';
import Tarea from "./Tarea";

//esto debe ser declarado como una variable global y encapsularse en un archivo seguro
const URL = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'; 

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);

    const  getTareasPrevias = async () => {
        console.log("Cargando Tareas del servidor");
        try{
            const responseTareasPrevias = await axios.get(URL);
            setTareas(responseTareasPrevias.data);
            console.log(responseTareasPrevias.data);
        }catch(error){
            console.log('[Request server error]',error)
        }
    }

    useEffect(() => {
        getTareasPrevias();
    },[]);

    const crearTarea = (tarea) => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            //Aca debemos enviar al servidor los datos actualizados
        }
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            };
            return tarea;
        });
        setTareas(tareasActualizadas);
        //Aca debemos enviar al servidor los datos actualizados
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id != id);
        setTareas(tareasActualizadas);
        //aca debemos enviar al sevidor los datos actualizados
    }

    return(
        <>
            <h1 className = 'tituloCabecera'>To do List</h1>
|           <div className="TareasContainer">
                {tareas.map((tarea) => {
                    <Tarea
                        key = {tareas.id}
                        id = {tareas.id}
                        texto = {tareas.texto}
                        proyecto = {tareas.proyecto}
                        prioridad = {tareas.prioridad}
                        fecha = {tareas.fecha}
                        completada ={tareas.completada}
                        completarTarea = {completarTarea}
                        eliminarTarea = {eliminarTarea}/>
                })}
            </div>
        </>
    );
}

export default ListaTareas;