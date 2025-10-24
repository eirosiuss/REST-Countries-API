import { useStore } from "./store.js";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import CountriesList from "./components/CountriesList.jsx";
import FilterBar from "./components/FilterBar.jsx";

export default function App() {
  const { fetchCountries, countries, error } = useStore();
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <Header />
      <CountriesList countries={countries} error={error} />
      <FilterBar />
    </>
  );
}
