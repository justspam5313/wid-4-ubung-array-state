import "./app.css";
import { useState } from "react";

function App() {
  return (
    <div id="app">
      <header>Übung WID 4 - Array State </header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* ---- Hinzufügen von Todos ---- */}
        <div id="eingabeZeile">
          <input type="text" />
          <button className="Button">Todo hinzufügen</button>
        </div>
        <hr />
        {/* ---- Anzeigen von Todos ----  */}
        <ol>
          <li>
            <div className="todoListe">
              <p>Schlafen</p>
              <button>Todo löschen</button>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
