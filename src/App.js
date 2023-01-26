import "./App.css"
import pokemon from './pokemon.json'

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem"
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <th>Name</th>
          <th>Type</th>
        </thead>
        <tbody>
          {
            pokemon.map(element =>
              <tr>
                <td>{element.name.english}</td>
                <td>{element.type.join(', ')}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
