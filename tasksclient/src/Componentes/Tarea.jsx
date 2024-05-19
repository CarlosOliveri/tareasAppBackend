"use client"
import {React, useState, useEffect} from 'react';
import axios from 'axios';
const URL = 'http://127.0.0.1:8000/tasks/api/v1/projects/'; 
const Tarea = (props) =>{
    //console.log(props)
    const [project,setProject] = useState();

    const searchProject = async () => {
        const findProject = await axios.get(`${URL} ${props.proyecto}`);
        setProject(findProject.data.name);
        //console.log(findProject.data);
    }
    
    useEffect(()=> {
        searchProject();
    },[])

    return(
        <div className='tareaContainer'>
            <div className='tareaContainer-Tarea'>{props.tarea}</div>
            <div>Proyecto: <p className='tareaContainer-propiedadTarea'>{project}</p></div>
            <div>Fecha limite: <p className='tareaContainer-propiedadTarea'>{props.fecha}</p></div>
            <div>Prioridad: <p className='tareaContainer-propiedadTarea'>{props.prioridad}</p></div>
        </div>
    );
}
export default Tarea; 