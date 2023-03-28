import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SearchEmployeesContextProps = {
  searchEmployees: string;
  setSearchEmployees: Dispatch<SetStateAction<string>>;
};
const INITIAL_STATE_SEARCH: SearchEmployeesContextProps = {
  searchEmployees: "",
  setSearchEmployees: () => "",
};

type SearchEmployeesContextProviderProps = {
  children: ReactElement;
};

export const SearchEmployeesContext = createContext(INITIAL_STATE_SEARCH);

export const useSearchEmployeesContext = () =>
  useContext(SearchEmployeesContext);

export const SearchEmployeesContextProvider = ({
  children,
}: SearchEmployeesContextProviderProps) => {
  const [searchEmployees, setSearchEmployees] = useState("");

  return (
    <SearchEmployeesContext.Provider
      value={{ searchEmployees, setSearchEmployees }}
    >
      {children}
    </SearchEmployeesContext.Provider>
  );
};
