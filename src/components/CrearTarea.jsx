import { useState } from 'react'
import styles from './CrearTarea.module.css'

const CrearTarea = (props)=>{

    const [tarea,setTarea] =useState("")
    const handleSubmit = (e)=> {
      e.preventDefault();
      props.crearTarea(tarea);
      setTarea('')
    }

    return(
    <form onSubmit={handleSubmit} className={styles.form} >
    <input className={styles.input_crear} type="text" value={tarea} placeholder='Ingrese una nueva tarea' onChange={(e)=> setTarea(e.target.value)} />
    <button className={styles.button} >Crear Tarea</button>
    </form>
)
}

export default CrearTarea