import {allCountriesListUrl} from '../constants/url.constants.js'


export async function getCountriesFullList() {
    const url = `${allCountriesListUrl}`;
    try {
      const data = await fetch(url).then((response) => response.json())
      .then(finalList=> finalList.map(country => [ country.name.official,
                                                   country.region, 
                                                   country.area.toLocaleString(),
                                                   country.population.toLocaleString()
                                                    ]))
      return data;
    } catch (error) {
      return error.message;
    }
  }

