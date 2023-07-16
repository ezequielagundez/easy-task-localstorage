import TareaFila from "./TareaFila";
import styles from "./TablaTareas.module.css"

const TablaTareas = ({ tareas, cambiarTarea,showCompleted = false,titulo }) => {
  const tareaTablaFila = (condicion) => (
    tareas
    .filter(tarea => tarea.done ===condicion)
    .map((tarea) => (
      <TareaFila tarea={tarea} key={tarea.name} cambiarTarea={cambiarTarea} />
    ))
  );

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th className={styles.titulo}>{titulo}{tareas.lenght}</th>
        </tr>
      </thead>
      <tbody className={styles.tarea}>{tareaTablaFila(showCompleted)}</tbody>
    </table>
  );
};

export default TablaTareas;
