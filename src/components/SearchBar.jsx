export default function SearchBar({onSearchCountry, onTextChange }) {
  return (
    <div>
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="country">Search</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Search..."
          value={onSearchCountry}
          onChange={(e) => {
            onTextChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
