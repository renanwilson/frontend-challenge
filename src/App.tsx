import { EmployeesContextProvider } from "contexts/EmployeesContext";
import { SearchEmployeesContextProvider } from "contexts/SearchEmployeesContext";
import { Index } from "pages/Index/Index";
import React from "react";

function App() {
  return (
    <div className="App">
      <EmployeesContextProvider>
        <SearchEmployeesContextProvider>
          <Index />
        </SearchEmployeesContextProvider>
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
