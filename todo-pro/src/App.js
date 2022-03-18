import { Routes, Router, Link, Route } from "react-router-dom";
import ToDo from "./ToDo/ToDo";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/todo" element={<ToDo />} />
    </Routes>
  </div>
);

export default App;
