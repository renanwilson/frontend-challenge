import { useEmployeesContext } from "contexts/EmployeesContext";
import { useSearchEmployeesContext } from "contexts/SearchEmployeesContext";
import { useFilteredEmployees } from "hooks/useFilteredEmployees";
import React from "react";
import { Container, Table } from "./styles";
import { TableData } from "./TableData/TableData";

export function EmployeesTable() {
  const TITLES = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];
  const { employees } = useEmployeesContext();
  const { searchEmployees } = useSearchEmployeesContext();
  const { filteredEmployees } = useFilteredEmployees();
  
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            {TITLES.map((title) => (
              <th key={title}>
                <h2>{title}</h2>
              </th>
            ))}
          </tr>
          {searchEmployees.length > 0 ? (
            <TableData employees={filteredEmployees} />
          ) : (
            <TableData employees={employees} />
          )}
        </tbody>
      </Table>
    </Container>
  );
}
