import { IEmployees } from "interfaces/IEmployees";
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getEmployees } from "services/employees";

type EmployeesContextProps = {
  employees: IEmployees[];
  setEmployees: Dispatch<SetStateAction<IEmployees[]>>;
};
const INITIAL_STATE: EmployeesContextProps = {
  employees: [],
  setEmployees: () => [],
};
type EmployeesContextProviderProps = {
  children: ReactElement;
};

export const EmployeesContext = createContext(INITIAL_STATE);

export const useEmployeesContext = () => useContext(EmployeesContext);

export const EmployeesContextProvider = ({
  children,
}: EmployeesContextProviderProps) => {
  const [employees, setEmployees] = useState<IEmployees[]>([]);
  useEffect(() => {
    getEmployees(setEmployees);
  }, [setEmployees]);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
