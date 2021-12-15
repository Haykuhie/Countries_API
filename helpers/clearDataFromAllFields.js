
export function clearDataFromAllFields(...fieldsToBeCleared){
    fieldsToBeCleared.forEach(item=> item.textContent='')
    fieldsToBeCleared.forEach(item=> item.style.backgroundImage ='')
}
