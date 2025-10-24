export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <form noValidate>
        <label htmlFor="country">Search</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => {
            onFilterTextChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
