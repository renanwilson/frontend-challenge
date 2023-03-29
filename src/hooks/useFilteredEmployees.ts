import { useEmployeesContext } from "contexts/EmployeesContext";
import { useSearchEmployeesContext } from "contexts/SearchEmployeesContext";

export function useFilteredEmployees() {
  const { employees } = useEmployeesContext();
  const { searchEmployees } = useSearchEmployeesContext();
  const replaceSearch = searchEmployees.replace(/[^a-zA-Z0-9]/g, "");
  const replaceString = (value: string) => value.replace(/[^a-zA-Z0-9]/g, "");
  const filteredEmployees =
    searchEmployees.length > 0
      ? employees.filter(
          (employee) =>
            replaceString(employee.name.toLowerCase()).includes(
              replaceSearch
            ) ||
            replaceString(employee.office.toLowerCase()).includes(
              replaceSearch
            ) ||
            employee.phone.includes(replaceSearch)
        )
      : [];
  return { filteredEmployees };
}
