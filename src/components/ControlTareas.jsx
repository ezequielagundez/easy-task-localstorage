import styles from "./ControlTareas.module.css"

const ControlTareas = ({setShowCompleted,eliminarTareas}) => {

   const handleDelete = ()=>{
    if(window.confirm("¿Esta seguro que desea eliminar las tareas?")){
        eliminarTareas()
    }
   }


  return (
    <div className={styles.control}>
        <div>

        
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label className={styles.label}>Tareas realizadas:</label>
      </div>
      <button className={styles.btnDelete} onClick={handleDelete}>
        Borrar Tareas
      </button>
    </div>

   
  );
};

export default ControlTareas;
