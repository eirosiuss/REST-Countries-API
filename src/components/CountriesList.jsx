import { useState } from "react";
import CountryDetails from "./CountryDetails.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterBar from "./FilterBar.jsx";
import CountryCard from "./CountryCard.jsx";

export default function CountriesList({ countries, error }) {
  const [searchCountry, setSearchCountry] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const filteredCountries = countries.filter((c) => {
    return c.name.official.toLowerCase().includes(searchCountry.toLowerCase());
  });

  let shownCountries = [];
  if (searchCountry === "") {
    shownCountries = countries;
  } else {
    shownCountries = filteredCountries;
  }

  let selectedRegionSearch = [];
  if (searchCountry === "") {
    selectedRegionSearch = selectedRegion;
  } else if (searchCountry !== "" && selectedRegion !== null) {
    selectedRegionSearch = selectedRegion.filter((c) => {
      return c.name.official
        .toLowerCase()
        .includes(searchCountry.toLowerCase());
    });
  }

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <>
      <SearchBar
        onSearchCountry={searchCountry}
        onTextChange={setSearchCountry}
      />
      <FilterBar onSelected={setSelectedRegion} />

      <div className="grid grid-cols-4 gap-2">
        {selectedRegion !== null
          ? selectedRegionSearch.map((country) => (
              <CountryCard
                onSelected={setSelectedCountry}
                key={country.name.official}
                country={country}
              />
            ))
          : shownCountries.map((country) => (
              <CountryCard
                onSelected={setSelectedCountry}
                key={country.name.official}
                country={country}
              />
            ))}

        {selectedCountry && (
          <CountryDetails
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
          ></CountryDetails>
        )}
      </div>
    </>
  );
}
