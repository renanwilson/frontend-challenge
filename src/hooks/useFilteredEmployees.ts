import { useEmployeesContext } from "contexts/EmployeesContext";
import { useSearchEmployeesContext } from "contexts/SearchEmployeesContext";

export function useFilteredEmployees() {
  const { employees } = useEmployeesContext();
  const { searchEmployees } = useSearchEmployeesContext();
  const replaceSearch = searchEmployees.replace(/[^a-zA-Z0-9]/g, "");
  const filteredEmployees =
    searchEmployees.length > 0
      ? employees.filter(
          (employee) =>
            employee.name.toLowerCase().includes(searchEmployees) ||
            employee.office.toLowerCase().includes(searchEmployees) ||
            employee.phone.includes(replaceSearch)
        )
      : [];
  return { filteredEmployees };
}
