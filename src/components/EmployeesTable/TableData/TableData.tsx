import { IEmployees } from "interfaces/IEmployees";
import { getDate } from "utils/getDate";
import { getPhoneNumber } from "utils/getPhoneNumber";
import { Photo } from "./styles";
type TableDataProps = {
  employees: IEmployees[];
};
export function TableData({ employees }: TableDataProps) {
  return (
    <>
      {employees.map((employee) => {
        return (
          <tbody key={employee.id}>
            <tr>
              <td>
                <Photo src={employee.photo} alt="Foto do funcionário" />
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
          </tbody>
        );
      })}
    </>
  );
}
