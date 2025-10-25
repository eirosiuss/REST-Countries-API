import { useEffect, useState } from "react";

const FilterBar = ({ onSelected }) => {
  const [region, setRegion] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;

    const fetchRegions = async () => {
      setError(null);
      const url = `https://restcountries.com/v3.1/region/${region}`;
      try {
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        onSelected(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchRegions();
  }, [region]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Select</label>
        <p
          onClick={() => {
            setRegion("");
            onSelected(null);
          }}
        >
          Null
        </p>
        <p
          onClick={() => {
            setRegion("europe");
          }}
        >
          Europe
        </p>
        <p
          onClick={() => {
            setRegion("americas");
          }}
        >
          Americas
        </p>
        <p
          onClick={() => {
            setRegion("africa");
          }}
        >
          Africa
        </p>
        <p
          onClick={() => {
            setRegion("asia");
          }}
        >
          Asia
        </p>
        <p
          onClick={() => {
            setRegion("oceania");
          }}
        >
          Oceania
        </p>
      </form>
    </div>
  );
};

export default FilterBar;
