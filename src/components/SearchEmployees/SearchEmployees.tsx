import { useSearchEmployeesContext } from "contexts/SearchEmployeesContext";
import { Search } from "./styles";
import React from "react";
export function SearchEmployees() {
  const { setSearchEmployees } = useSearchEmployeesContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEmployees(e.target.value.toLowerCase());
  };
  return (
    <Search
      type="search"
      placeholder="Pesquisar"
      onChange={(e) => handleSearch(e)}
    />
  );
}
