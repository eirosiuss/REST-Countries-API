export default function CountryDetails({ onClose, country }) {
  return (
    <div className="z-10 fixed w-full h-full top-0 left-0 bg-amber-950 flex justify-center items-center">
      <article className="bg-yellow-50">
        <p>{country.name.official}</p>
        <button onClick={onClose}>Back</button>
      </article>
    </div>
  );
}
