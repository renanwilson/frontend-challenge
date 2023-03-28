import { EmployeesTable } from "components/EmployeesTable/EmployeesTable";
import { Header } from "components/Header/Header";
import { SearchEmployeesSection } from "components/SearchEmployeesSection/SearchEmployeesSection";

export function Index() {
  return (
    <>
      <Header />
      <SearchEmployeesSection />
      <EmployeesTable />
    </>
  );
}
