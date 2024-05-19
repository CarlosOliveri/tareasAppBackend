"use client"
import {React, useState, useEffect} from "react";
import axios from 'axios';
import Tarea from "./Tarea";

//esto debe ser declarado como una variable global y encapsularse en un archivo seguro
const URL = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'; 

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);

    const orderForDate = () => {
        const newTareas = [...tareas].sort((a,b) =>{
            return new Date(a.fecha) - new Date(b.fecha)
        });
        setTareas(newTareas);
    }

    const orderForPrioridad = () => {
        const newTareas = [...tareas].sort((a,b) => {
            if(a.prioridad == b.prioridad) {
                console.log("ambos iguales");
                return new Date(a.fecha) - new Date(b.fecha);
            }else{
                const prioriryOrder = {'alta':1,'media':2,'baja':3};
                return prioriryOrder[a.prioridad] - prioriryOrder[b.prioridad];
            }
        })
        setTareas(newTareas);
    }

    const  getTareasPrevias = async () => {
        console.log("Cargando Tareas del servidor");
        try{
            const responseTareasPrevias = await axios.get(URL);
            setTareas(responseTareasPrevias.data);
            //console.log(responseTareasPrevias.data)
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
                {tareas.map((tarea) => 
                    <Tarea
                        key = {tarea.id}
                        id = {tarea.id}
                        tarea = {tarea.text}
                        proyecto = {tarea.proyecto}
                        prioridad = {tarea.prioridad}
                        fecha = {tarea.fecha}
                        completada ={tarea.completada}
                        completarTarea = {completarTarea}
                        eliminarTarea = {eliminarTarea}/> 
                )}
            </div>
            <button onClick={orderForPrioridad}>ordenar</button>
        </>
    );
}

export default ListaTareas;