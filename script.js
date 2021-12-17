import {appendTableRowsToTable} from './helpers/appendTableRowsToTable.js';
import {searchByNameUrl} from './constants/url.constants.js';
import {searchedCountryFetch} from './helpers/searchedCountryFetch.js';
import {clearDataFromAllFields} from './helpers/clearDataFromAllFields.js';
import {createCountryInfoRow} from './helpers/createCountryInfoRow.js';
import {createTableHeaders} from './helpers/createTableHeaders.js';
import {sectionAppear} from './helpers/sectionAppear.js';
import {sectionDisappear} from './helpers/sectionDisappear.js';

const searchInput= document.querySelector('input');
const searchButton= document.querySelector('.searchBtn');
const seeAllCountriesBtn= document.querySelector('.seeAllCountriesBtn');
const tableRows= document.getElementById('table').getElementsByTagName('tr');
const countryInfo= document.querySelector('.countryInfo');
const countryCoatOfArms= document.querySelector('.countryCoatOfArms');
const countryName= document.querySelector('.countryName')
const countryFlag= document.querySelector('.forFlag')
const table=document.getElementById('table')
const bkgImages=document.querySelectorAll('.bkgImage');
let countryListFlag=false

seeAllCountriesBtn.addEventListener('click', ()=>{
    try{
        clearDataFromAllFields( countryInfo, countryName, bkgImages[0], bkgImages[1])         
        if(!countryListFlag){
            createTableHeaders('Country Name', 'Region', 'Territory', 'Population')
            appendTableRowsToTable()  
            countryListFlag=true 
           // countryInfo.style.display='none'
            //countryCoatOfArms.style.display='none'
            sectionDisappear(countryInfo, countryCoatOfArms)   
        }        
    }catch{
        alert('Something went wrong, please try later!')
    }     
})

searchButton.addEventListener('click', async ()=> {
    try{
        if(!!searchInput.value){   
        let  searchedCountryInfo = await searchedCountryFetch(`${searchByNameUrl}/${searchInput.value}`)
        searchInput.value=''
        let arrOfCountryInfo=searchedCountryInfo.split(';')
        let lastIndex=arrOfCountryInfo.length-1
        countryName.innerText= `${arrOfCountryInfo[lastIndex]}` 
        countryFlag.style.backgroundImage =`url(${arrOfCountryInfo[lastIndex-1].trim()})` 
        clearDataFromAllFields( countryInfo)         
        createCountryInfoRow(arrOfCountryInfo, countryInfo, countryCoatOfArms)
        if(!!tableRows.length) table.deleteTHead()
        countryListFlag=false
         sectionAppear(countryInfo, countryCoatOfArms)
         }else alert('Please enter some value to search!')
    }catch{
        alert('Something went wrong, type the country name more specifically or try later!')
    }    
})

table.addEventListener('click', async (event)=> {
    try{
        let targetCountryName=event.target.parentNode.firstChild.textContent
        let  searchedCountryInfo = await searchedCountryFetch(`${searchByNameUrl}/${targetCountryName}`)
        let arrOfCountryInfo=searchedCountryInfo.split(';')
        let lastIndex=arrOfCountryInfo.length-1
        countryName.innerText= `${arrOfCountryInfo[lastIndex]}` 
        countryFlag.style.backgroundImage =`url(${arrOfCountryInfo[lastIndex-1].trim()})`        
        if(!!tableRows.length) table.deleteTHead()     
        createCountryInfoRow(arrOfCountryInfo, countryInfo, countryCoatOfArms) 
        countryListFlag=false
        sectionAppear(countryInfo,countryCoatOfArms )
    }catch{
        alert('Something went wrong, please try later!')
    }
})