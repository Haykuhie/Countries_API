import {appendTableRowsToTable} from './helpers/appendTableRowsToTable.js';
import {searchByNameUrl} from './constants/url.constants.js';
import {searchedCountryFetch} from './helpers/searchedCountryFetch.js';
import {clearDataFromAllFields} from './helpers/clearDataFromAllFields.js';
import {createCountryInfoRow} from './helpers/createCountryInfoRow.js';
import {createTableHeaders} from './helpers/createTableHeaders.js'

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
            createTableHeaders('Country Name', 'Region', 'Territory', 'Population')
            appendTableRowsToTable()  
            console.log(tableRows.length)
            countryListFlag=true      
             
    }catch{
        alert('Something went wrong, please try later!')
    }     
})

searchButton.addEventListener('click', async ()=> {
    try{
        if(!!searchInput.value){   
        let  searchedCountryInfo = await searchedCountryFetch(`${searchByNameUrl}/${searchInput.value}`)
        let arrOfCountryInfo=searchedCountryInfo.split(';')
        let lastIndex=arrOfCountryInfo.length-1
        countryName.innerText= `${arrOfCountryInfo[lastIndex]}` 
        countryFlag.style.backgroundImage =`url(${arrOfCountryInfo[lastIndex-1].trim()})` 
        

        createCountryInfoRow(arrOfCountryInfo, countryInfo, countryCoatOfArms)
        countryListFlag=false
        searchInput.value=''
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
        
        
       
        createCountryInfoRow(arrOfCountryInfo, countryInfo, countryCoatOfArms) 
        countryListFlag=false
    }catch{
        alert('Something went wrong, please try later!')
    }
})