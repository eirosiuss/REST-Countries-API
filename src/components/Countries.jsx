import { useStore } from "../store.js";
import { useEffect } from "react";

const countries = () => {
  const { fetchCountries, countries, error } = useStore();
  useEffect(() => {
    fetchCountries();
  }, []);

  const countryNames = countries.map((country) => country).slice(0, 9);
  console.log(countryNames);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {countries.slice(0, 8).map((country) => (
        <article className="bg-amber-400" key={country.name.official}>
          <div><img src={country.flags.svg} alt={country.flags.alt} /></div>
          <span>{country.name.official}</span>
          <span>Population: {country.population}</span>
          <span>Region: {country.region}</span>
          <span>Capital: {country.capital}</span>
        </article>
      ))}
    </div>
  );
};

export default countries;
