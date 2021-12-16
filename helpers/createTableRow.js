export function createTableRow(...countryInfoCols) {
    const table = document.getElementById("table");
    const row = table.insertRow(1);
  
    countryInfoCols.map((column) => {
      const cell1 = row.insertCell(countryInfoCols.indexOf(`${column}`));
      cell1.innerText = `${
        countryInfoCols[countryInfoCols.indexOf(`${column}`)]
      }`;
    });
  }
  