export async function searchedCountryFetch(url){
    let countryInfo = await fetch(url).then(res=>res.json())
   .then( data=> `Capital city: ${data[0].capital[0]};
                  The country has borders with the following countries: ${data[0].borders};
                  The Country is independnet: ${data[0].independent};
                  It is situated in the following continent: ${data[0].continents};
                  Official languages in the country: ${Object.values(data[0].languages)};
                  Population of the country: ${data[0].population.toLocaleString()} people;
                  Official status of the country: ${data[0].status};
                  Subregion of the country: ${data[0].subregion};
                  The country is UN member: ${data[0].unMember}; 
                  Timezones in the country: ${data[0].timezones};
                  Area of the country: ${data[0].area.toLocaleString()} sq km;
                  The country is landlocked: ${data[0].landlocked};
                   ${data[0].coatOfArms.png};
                   ${data[0].flags.png};
                   ${data[0].name.official}`
  ) 
  return countryInfo
}