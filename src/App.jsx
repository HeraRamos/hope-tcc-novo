import { Routes, Route } from "react-router-dom";

import Pagamento from "./pages/formapagamento/pagamento";

function App() {
  return (
    <Routes>



      <Route
        path="/Pagamento"
        element={<Pagamento />}
      />

    </Routes>
  );
}

export default App;