import { useState } from "react";

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
            <input type="text"
                className="search-user"
                placeholder="Enter the username"
                value={user}
                onChange={(e) => (setUser(e.target.value))}
            />

            <button onClick={searchUser}>Search</button>

            {data && (
                <div className="card">
                    <div className="each-card" key={data.id}>
                        <h1>{data.login}</h1>
                    </div>
                </div>

            )}

           {error && <h1>{error}</h1>}
           

        </main>

    </>
}

export default Home;