export function createCountryInfoRow(array, targetInfoDiv, targetImgDiv){
    let lastIndex=array[array.length-3]
    for(let i=0; i<array.length-3;i++){
        const  newRow = document.createElement("p");
        newRow.textContent= `✷ ${array[i]}`;
        targetInfoDiv.appendChild(newRow)
        targetImgDiv.style.backgroundImage =`url(${lastIndex.trim()})`        
    }
}
