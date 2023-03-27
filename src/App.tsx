import { EmployeesContextProvider } from "contexts/EmployeesContext";
import React from "react";

function App() {
  return (
    <div className="App">
      <EmployeesContextProvider>
        <h1>Initial</h1>
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
