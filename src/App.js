import "./app.css";
import { useState } from "react";

// Mögliche Erweiterungen:
// Die ToDos werden aktuell als ein Array mit Strings in State gespeichert. Ändere den Array, das dieser Objekte enhält, welche die Eigenschaft «task» und ein ToDo (string) als Wert haben. Beispiel:   [«Lesen»]   wird zu  [{task: «Lesen»}]

// Aktualisiere und teste den Code, dass er nun mit Objekten funktioniert. Das Eingabefeld und den zugehörigen Hook änderst du nicht (es speichert weiter den Eingabewert als string)

// Füge zwischen Eingabefeld und «Hinzufügen» Button ein Auswahlmenü (select + option) hinzu. Dieses soll die drei Prioritäten «hoch», «mittel», «niedrig» definieren und in den Todo-Objekten speichern. (Auch hier brauchst du einen useState-Hook und value-Attrîbute.)

// ToDos sollen je nach Priorität andere Hintergrundfarben haben.

function App() {
  // State für alle Todos (Array) und für den Text im Eingabefeld
  const [todoListe, setTodoListe] = useState([
    { task: "Schlafen", prioritaet: "hoch" },
    { task: "Essen", prioritaet: "hoch" },
  ]);
  const [aktuellesTodo, setAktuellesTodo] = useState("");
  const [prio, setPrio] = useState("mittel");

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
          <select value={prio} onChange={(e) => setPrio(e.target.value)}>
            <option value="hoch">hoch</option>
            <option value="mittel">mittel</option>
            <option value="niedrig">niedrig</option>
          </select>
          <button
            className="Button"
            onClick={() =>
              setTodoListe([
                ...todoListe,
                { task: aktuellesTodo, prioritaet: prio },
              ])
            }
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
              <div className={`todoListe ${todo.prioritaet}`}>
                <p>{todo.task}</p>
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
