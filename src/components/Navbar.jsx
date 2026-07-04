import { useState } from "react";
import cloud from "../assets/cloud.png";
function Navbar({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        onSearch(search);
    };

    return (
        <div>
            <div className="flex justify-center mt-8 items-center p-4">
    <img
            src={cloud}
            className="w-30 h-30 object-cover"
            alt="cloud"
     />
            <h2 className="text-white text-5xl ">Weather Dashboard</h2>
            </div>
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