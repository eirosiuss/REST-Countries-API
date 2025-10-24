export default function Card({ country, onSelected }) {
  return (
    <article
      className="bg-amber-400"
      onClick={() => onSelected(country)}
    >
      <div>
        <img src={country.flags.svg} alt={country.flags.alt} loading="lazy" />
      </div>
      <span>{country.name.official}</span>
      <span>Population: {country.population}</span>
      <span>Region: {country.region}</span>
      <span>Capital: {country.capital}</span>
    </article>
  );
}
