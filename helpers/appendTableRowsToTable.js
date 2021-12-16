import { createTableRow } from "./createTableRow.js";
import { getCountriesFullList } from "./getCountriesFullList.js";

export function appendTableRowsToTable() {
  getCountriesFullList().then((countries) =>
    countries.map((country) => {
      createTableRow(country[0], country[1], country[2], country[3]);
    })
  );
}
