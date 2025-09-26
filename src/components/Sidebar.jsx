import "./Sidebar.css";

import "./Sidebar.css";

function Sidebar({ setActiveView }) {
  return (
    <div className="sidebar">
        <div className="Logo">
            <h1>GABO</h1>
        </div>
      <ul>
        <li onClick={() => setActiveView("todos")}> Todos</li>
        <li onClick={() => setActiveView("recientes")}> Recientes</li>
        <li onClick={() => setActiveView("favoritos")}> Favoritos</li>
        <li onClick={() => setActiveView("formatos")}> Formatos</li>
        <li onClick={() => setActiveView("ajustes")}> Ajustes</li>
        <li onClick={() => setActiveView("ayuda")}> Ayuda</li>
      </ul>
    </div>
  );
}

export default Sidebar;
