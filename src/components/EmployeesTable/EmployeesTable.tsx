import { useEmployeesContext } from "contexts/EmployeesContext";
import React from "react";
import { getDate } from "utils/getDate";
import { getPhoneNumber } from "utils/getPhoneNumber";
import { Container, Table, Image } from "./styles";

export function EmployeesTable() {
  const TITLES = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];
  const { employees } = useEmployeesContext();
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
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>
                  <Image src={employee.photo} alt="Imagem" />
                </td>
                <td>
                  <p>{employee.name}</p>
                </td>
                <td>
                  <p>{employee.office}</p>
                </td>
                <td>
                  <p>{getDate(employee.admission_date)}</p>
                </td>
                <td>
                  <p>{getPhoneNumber(employee.phone)}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
