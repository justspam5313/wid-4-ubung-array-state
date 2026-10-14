import "./app.css";
import { useState } from "react";

function App() {
  // State für alle Todos (Array) und für den Text im Eingabefeld
  const [todoListe, setTodoListe] = useState(["Schlafen", "Essen"]);
  const [aktuellesTodo, setAktuellesTodo] = useState("");

  // Todo an der Position "index" löschen
  const removeTodo = (index) => {
    // filter() geht jedes Element durch und erzeugt ein neues Array
    // todo = das Element, i = seine Position
    // bleibt nur drin, wenn die Bedingung true ist → alle außer dem mit dem gleichen Index
    // das alte Array wird dabei nicht verändert
    const neueTodoListe = todoListe.filter((todo, i) => index !== i);
    setTodoListe(neueTodoListe); // neues Array in den State → React rendert neu
  };

  return (
    <div id="app">
      <header>Übung WID 4 - Array State </header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* ---- Hinzufügen von Todos ---- */}
        <div id="eingabeZeile">
          {/* onChange wird bei jeder Eingabe ausgelöst
              event.target.value = aktueller Text im Feld → in aktuellesTodo speichern */}
          <input
            type="text"
            onChange={(event) => setAktuellesTodo(event.target.value)}
          />
          {/* neues Array erstellen: ...todoListe kopiert die alten Todos, aktuellesTodo kommt hinten dran
              Arrow-Function, damit das erst beim Klick passiert */}
          <button
            className="Button"
            onClick={() => setTodoListe([...todoListe, aktuellesTodo])}
          >
            Todo hinzufügen
          </button>
        </div>
        <hr />
        {/* ---- Anzeigen von Todos ----  */}
        <ol>
          {/* map() geht durch die todoListe und macht aus jedem Todo ein <li>
              todo = Text, index = Position (wird für key und zum Löschen gebraucht)
              die <ol> nummeriert die <li> automatisch */}
          {todoListe.map((todo, index) => (
            <li key={index}>
              <div className="todoListe">
                <p>{todo}</p>
                {/* Arrow-Function, damit removeTodo erst beim Klick mit dem richtigen index aufgerufen wird
                    onClick={removeTodo(index)} würde es sofort beim Rendern ausführen */}
                <button onClick={() => removeTodo(index)}>Todo löschen</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
