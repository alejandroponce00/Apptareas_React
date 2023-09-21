import "./VisibilityControl.css";

export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`Eliminar todas ${description}?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="listado_tareas">
      <div className="mostrar_tareas_completadas">
        <input id="checkbox_done"
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">Muestrame {description}</label>
      </div>
      <button className="btn_limpiar_tareas" onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};
