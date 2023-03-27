import { EmployeesContextProvider } from "contexts/EmployeesContext";
import { Index } from "pages/Index/Index";
import React from "react";

function App() {
  return (
    <div className="App">
      <EmployeesContextProvider>
        <Index />
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
