import { useState, useEffect } from "react";
import CrearTarea from "./components/CrearTarea";
import TablaTareas from "./components/TablaTareas";
import ControlTareas from "./components/ControlTareas";
import "./App.css";

function App() {
  const [tareasItems, setTareasItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [tareasCompletas, setTareasCompletas] = useState(0);
  const [tareasIncompletas, setTareasIncompletas] = useState(0);

  function crearTarea(tarea) {
    if (!tareasItems.find((tarea) => tarea.name == tarea)) {
      setTareasItems([...tareasItems, { name: tarea, done: false }]);
    }
  }

  function cambiarTarea(tarea) {
    setTareasItems(
      tareasItems.map((t) =>
        t.name === tarea.name ? { ...t, done: !t.done } : t
      )
    );
  }

  useEffect(() => {
    let data = localStorage.getItem("tareas", JSON.stringify(tareasItems));
    if (data) {
      setTareasItems(JSON.parse(data));
    }
  }, []);

  const eliminarTareas = () => {
    setTareasItems(tareasItems.filter((tarea) => !tarea.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareasItems));
  }, [tareasItems]);

  // Calcula el conteo de tareas completadas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareasItems));

    const count = tareasItems.filter((t) => t.done === true).length;
    setTareasCompletas(count);
  }, [tareasItems]);
  console.log(tareasCompletas);

  // Calcula el conteo de tareas no completadas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareasItems));

    const count = tareasItems.filter((t) => t.done === false).length;
    setTareasIncompletas(count);
  }, [tareasItems]);
  console.log(tareasIncompletas);

  return (
    <>
      <h1>EasyTasks📋</h1>
      <div className="Container">
        <div>
          <CrearTarea crearTarea={crearTarea} />
          <TablaTareas
            tareas={tareasItems}
            cambiarTarea={cambiarTarea}
            titulo={"Tareas pendientes: " + tareasIncompletas}
          />
        </div>
        <div>
          <ControlTareas
            setShowCompleted={(checked) => setShowCompleted(checked)}
            eliminarTareas={eliminarTareas}
          />
          {showCompleted === true ? (
            <TablaTareas
              tareas={tareasItems}
              cambiarTarea={cambiarTarea}
              showCompleted={showCompleted}
              titulo={"Tareas completadas: " + tareasCompletas}
            />
          ) : null}
        </div>
      </div>
      
    </>
  );
}

export default App;
