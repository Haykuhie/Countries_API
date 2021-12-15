export function createTableHeaders(...tableHeaderCols){
    const table = document.getElementById("table")
    const header = table.createTHead();
    const row = header.insertRow(0);
   
    tableHeaderCols.map(headerColumn=>{
        const cell= document.createElement('th')
        cell.innerText=`${headerColumn}`
        row.appendChild(cell)
    })      
}