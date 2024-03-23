import { Country } from "cistf-models/lib/Country";

class CountryService {
  addCountry = (country: Country) => {
    return country;
  };

  getCountry = () => {
    console.log("Calling Get country");
  };
}

export default CountryService;
