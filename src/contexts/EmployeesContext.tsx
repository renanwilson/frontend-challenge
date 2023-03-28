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

export const INITIAL_STATE_EMPLOYEES: IEmployees[] = [
  {
    id: 0,
    admission_date: "",
    name: "",
    office: "",
    phone: "",
    photo: "",
  },
];

type EmployeesContextProps = {
  employees: IEmployees[];
  setEmployees: Dispatch<SetStateAction<IEmployees[]>>;
};
type ListContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: EmployeesContextProps = {
  employees: INITIAL_STATE_EMPLOYEES,
  setEmployees: () => [],
};

export const EmployeesContext =
  createContext<EmployeesContextProps>(INITIAL_STATE);

export const useEmployeesContext = () => useContext(EmployeesContext);

export const EmployeesContextProvider = ({
  children,
}: ListContextProviderProps) => {
  const [employees, setEmployees] = useState(INITIAL_STATE_EMPLOYEES);
  useEffect(() => {
    getEmployees(setEmployees);
  }, [setEmployees]);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
