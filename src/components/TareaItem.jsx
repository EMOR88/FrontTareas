import { useDispatch } from "react-redux"
import {deleteTarea} from '../features/tareas/tareaSlice'

const TareaItem = ({tarea}) => {
  
  const dispatch = useDispatch()  

  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
        </div>
        <h4>{tarea.texto}</h4>
        <button className="close" onClick={()=>dispatch(deleteTarea(tarea._id))}>X</button>
    </div>
  )
}

export default TareaItem