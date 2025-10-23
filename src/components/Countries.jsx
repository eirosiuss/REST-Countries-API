import { useStore } from "../store.js";
import { useEffect, useState } from "react";

function Modal({ onClose, children }) {
  return (
    <div
      onClick={onClose}
      className="z-10 fixed w-full h-full top-0 left-0 bg-amber-950 flex justify-center items-center"
    >
      <div className="bg-yellow-50">{children}</div>
    </div>
  );
}

const Countries = () => {
  const { fetchCountries, countries, error } = useStore();
  useEffect(() => {
    fetchCountries();
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => setSelectedCountry(country);
  const closeModal = () => setSelectedCountry(null);
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {countries.map((country) => (
        <article
          className="bg-amber-400"
          onClick={() => openModal(country)}
          key={country.name.official}
        >
          <div>
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              loading="lazy"
            />
          </div>
          <span>{country.name.official}</span>
          <span>Population: {country.population}</span>
          <span>Region: {country.region}</span>
          <span>Capital: {country.capital}</span>
        </article>
      ))}
      {selectedCountry && (
        <Modal onClose={closeModal}>
          <p>{selectedCountry.name.official}</p>
        </Modal>
      )}
    </div>
  );
};

export default Countries;
