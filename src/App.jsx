import { useEffect,  useState} from "react";
import Header from "./components/Header.jsx";
import CountriesList from "./components/CountriesList.jsx";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    setError(null);
    const url = "https://restcountries.com/v3.1/independent?status=true";
    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setCountries(result)
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <>
      <Header />
      <CountriesList countries={countries} error={error} />
    </>
  );
}
