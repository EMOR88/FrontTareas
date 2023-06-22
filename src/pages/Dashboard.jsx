import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TareaForm from '../components/TareaForm'
import Spiner from '../components/Spinner'
import { getTareas, reset } from '../features/tareas/tareaSlice'
import TareaItem from '../components/TareaItem'
import {toast} from 'react-toastify'



const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.auth)
  const {tareas, isLoading, isError, message } = useSelector((state)=>state.tarea)
  
  useEffect(()=>{
    if(isError) {
      //console.log(message)
      toast.error(message)
    }

    if (!user){
      navigate('/login')
    } else {
      dispatch(getTareas())
    }

    

    return ()=>{
      dispatch(reset())
    }


  },[user, navigate, isError, message, dispatch])

  if (isLoading){
    return <Spiner/>
  }

  return (
    <>
      <section className='heading'>
        <h2>Bienvenido {user && user.name} </h2>
        <p>Mis tareas</p>
      </section>

      <TareaForm/>

      <section className='content'>
        {tareas.length>0 ? (
          <div className="tareas">
            {tareas.map((tarea)=>(
              <TareaItem key={tarea._id} tarea={tarea} />
            ))}
          </div>
        ) : (<h3>El ususarion aun no agrega tareas</h3>)}
      </section>

    </>
  )
}

export default Dashboard