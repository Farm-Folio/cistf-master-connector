import { Country } from "cistf-models/lib/Country";
declare class CountryService {
    addCountry: (country: Country) => Country;
    getCountry: () => void;
}
export default CountryService;
