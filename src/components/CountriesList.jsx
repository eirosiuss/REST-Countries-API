import { useState } from "react";
import CountryDetails from "./CountryDetails.jsx";
import SearchBar from "./SearchBar.jsx";
import Card from "./CountryCard.jsx";

export default function CountriesList({ countries, error }) {
  const [searchText, setSearchText] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(null);
  const filteredCountries = countries.filter((c) => {
    return c.name.official.toLowerCase().includes(searchText.toLowerCase());
  });

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <>
      <SearchBar searchText={searchText} onFilterTextChange={setSearchText} />

      <div className="grid grid-cols-4 gap-2">
        {searchText === ""
          ? countries.map((country) => (
              <Card
                onSelected={setSelectedCountry}
                key={country.name.official}
                country={country}
              ></Card>
            ))
          : filteredCountries.map((country) => (
              <Card
                onSelected={setSelectedCountry}
                key={country.name.official}
                country={country}
              ></Card>
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
