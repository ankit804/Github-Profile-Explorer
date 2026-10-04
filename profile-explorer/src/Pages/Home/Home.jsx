import { useState } from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import Notfound from "../../Component/Notfound";

function Home() {
    const [user, setUser] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    async function searchUser() {
        setError("");

        if (!user) return;

        try {
            const response = await fetch(
                `https://api.github.com/users/${user}`
            );

            if (!response.ok) {
                throw new Error("No user found ...");
            }

            const info = await response.json();
            setData(info);

        } catch (err) {
            setError(err.message);
            setData(null);
        }
    }

    return (
        <main>
            <h1 className="maintext">Explore Github Profiles.</h1>
            <p className="below-text">
                Discover developers and their work.
            </p>

            <div className="main">
                <input
                    type="text"
                    className="search-user"
                    placeholder="Enter the username..."
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />

                <button onClick={searchUser}>
                    <span>
                        <FaSearch />
                    </span>
                </button>
            </div>

            {data && (
                <div className="each-card" key={data.id}>
                    <img
                        src={data.avatar_url}
                        alt="avatar"
                    />

                    <h1>{data.name}</h1>
                    <h2>{data.login}</h2>

                    <a href={`/profile/${data.login}`}>
                        View Profile
                    </a>
                </div>
            )}

            {error && <Notfound error={error} />}
        </main>
    );
}

export default Home;