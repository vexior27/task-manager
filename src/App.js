import Column from "./components/Column";

import "./App.css"

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Column type="Todo"/>
        </div>
        <div className="col-4">
          <Column type="Ongoing"/>
        </div>
        <div className="col-4">
          <Column type="Done"/>
        </div>
      </div>
    </div>
  );
}

export default App;