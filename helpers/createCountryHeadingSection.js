export function createCountryHeadingSection(){
    const div1= document.createElement('div')
    div1.className='forFlex'
    
    const div2=document.createElement('div')
    div2.className='forFlag bkgImage'
    
    const p=document.createElement('p')
    p.className='countryName'
    
    div1.appendChild(div2)
    div1.appendChild(p)
    
    document.body.appendChild(div1)
}

