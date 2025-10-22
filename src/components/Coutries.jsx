import { useStore } from "../store.js";
import { useEffect } from "react";

const countries = () => {
  const { fetchCountries, countries, error } = useStore();
  useEffect(() => {
    fetchCountries();
  }, []);
  // console.log(countries.forEach((country) => {
    // console.log(country.name.common);
  // }));
  return (
    <div className="grid grid-cols-4 gap-2">
      {
        countries.map((country) => 
          <article className="bg-amber-400 w-40" key={country.name.common}>
            {country.name.common}
          </article>
        )
      }
    </div>
  )
};

export default countries;
