import axios from 'axios'

const API_URL = 'https://shy-plum-meerkat-vest.cyclic.app/api/tareas/'

//crear una tarea
const createTarea = async(tareaData, token)=>{
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, tareaData, config)

    return response.data

}

//obtener tareas del ususario logeado
const getTareas = async(token)=>{
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data

}

//borrara tarea
const deleteTarea = async(tareaId, token)=>{
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL+tareaId, config)

    return response.data

}

const tareaService = {
    createTarea,
    getTareas,
    deleteTarea
}

export default tareaService