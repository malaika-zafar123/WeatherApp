import { useState } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    onSearch(search);
  };

  return (
    <div>
<h2 className="text-white text-5xl mt-11 p-4">Weather Dashboard</h2>
    <form
      onSubmit={handleSubmit}
      className="p-2 m-2 border-2 text-white rounded-2xl"
    >
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => {
  setSearch(e.target.value);

  if (e.target.value.trim() === "") {
    onSearch("");
  }
}}
        className="w-full p-3 rounded-lg text-white"
      />
    </form>
    </div>
  );
}

export default Navbar;