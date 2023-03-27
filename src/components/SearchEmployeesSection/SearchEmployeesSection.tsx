import { SearchEmployees } from "components/SearchEmployees/SearchEmployees";
import { Section } from "./styles";

export function SearchEmployeesSection() {
  return (
    <Section>
      <h1>Funcionários</h1>
      <SearchEmployees />
    </Section>
  );
}
