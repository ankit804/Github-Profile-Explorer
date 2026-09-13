import { useState } from "react";
import "./Home.css"
import { FaSearch } from "react-icons/fa";

function Home() {
    const [user, setUser] = useState("")
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    async function searchUser() {
        setError("")
        if (!user) return;
        try {
            const response = await fetch(`https://api.github.com/users/${user}`)

            if (!response.ok) {
                throw new Error("No user found ...")
            }

            const info = await response.json()
            setData(info)

        } catch (err) {
            setError(err.message)
            setData(null)
        }

    }

    return <>
        <main>
            <h1 className="maintext">Explore Github Profiles.</h1>
            <p className="below-text">Discover developers and their work.</p>
            <div className="main">
                <input type="text"
                    className="search-user"
                    placeholder="Enter the username..."
                    value={user}
                    onChange={(e) => (setUser(e.target.value))}
                />

                <button onClick={searchUser}><span><FaSearch /></span></button>

            </div>


            {data && (
                <div className="card">
                    <div className="each-card" key={data.id}>
                        <img src={data.avatar_url} alt="avatar" />
                        <h1>{data.name}</h1>
                        <h2>{data.login}</h2>
                        <p>{data.bio}</p>
                        <p>{data.location}</p>
                        <div className="info">
                            <h4>#Following: {data.following}</h4>
                            <h4>#Followers: {data.followers}</h4>
                            <h4>#Repos: {data.public_repos}</h4>
                        </div>
                        <a href={data.html_url}>
                            View Profile
                        </a>
                    </div>
                </div>

            )}
            {error && <h1>{error}</h1>}


        </main>

    </>
}

export default Home;