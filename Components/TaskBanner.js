'use client'
import './TaskBanner.css';

export const TaskBanner = ({ userName, taskItems }) => (
  <div id="usuario_lista_tareas">
  <h3>
    {userName} Tareas App{" "}
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} Tareas completadas)
    </span>
  </h3>
  </div>
);
