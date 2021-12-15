export function createCountryInfoSection(){
    const div1= document.createElement('div')
    div1.className='forFlex lastDiv'
    
    const div2=document.createElement('div')
    div2.className='countryInfo'
    
    const div3=document.createElement('div')
    div3.className='countryCoatOfArms bkgImage'
    
    div1.appendChild(div2)
    div1.appendChild(div3)
    
    document.body.appendChild(div1)
}