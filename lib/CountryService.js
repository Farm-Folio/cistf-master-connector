"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CountryService = /** @class */ (function () {
    function CountryService() {
        this.addCountry = function (country) {
            return country;
        };
        this.getCountry = function () {
            console.log("Calling Get country");
        };
    }
    return CountryService;
}());
exports.default = CountryService;
