import styles from './TareaFila.module.css'

const TareaFila = ({tarea,cambiarTarea})=>{
    return(
        <tr >
        <td>
        {tarea.name}
        
        </td>
        
        <input className={styles.checkbox} type="checkbox" checked={tarea.done} onChange={()=> cambiarTarea(tarea)} />
      </tr>
    )
}

export default TareaFila