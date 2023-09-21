
import { useState } from "react";
import "./TaskRow.css";

export function TaskRow({ task, toggleTask, editTask, editMode, onEdit, onSaveEdit }) {
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (editedName.trim() !== "") {
      onSaveEdit();
    }
  };

  return (
    <div id="tabla_tareas">
      <tr>
        <td>
          {editMode ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button className="btn btn-success btn-sm" onClick={handleSave}>
                Guardar
              </button>
            </>
          ) : (
            <div className="tareas_pendientes">
              <div className="nombre_tarea">
                <p>{task.name}</p>
              </div>

              <div className="tareas_pendientes_botones">
                <p className="descripcion_tarea">{task.description}</p>

                <div className="botones_tareas">
                  <button
                    className="btn_tareas_pendientes"
                    onClick={onEdit}
                  >
                    Editar
                  </button>
                  <button
                    className="btn_tareas_pendientes"
                    onClick={() => toggleTask(task)}
                  >
                    Completada
                  </button>
                </div>
              </div>
            </div>
          )}
        </td>
      </tr>
    </div>
  );
}
