import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const { username } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const information = await response.json();
                setData(information);
            } catch (err) {
                setError(err.message);
            }
        }

        getData();
    }, [username]);

    if (error) {
        return <h1>Error Occurred</h1>;
    }

    if (!data) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1 className="main-text">View Profile</h1>

            <div className="each-card">
                <img src={data.avatar_url} alt={data.login} />
                <h2>{data.name}</h2>
                <p>@{data.login}</p>
                <p>{data.bio}</p>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
                <p>Repositories: {data.public_repos}</p>
            </div>
        </>
    );
}

export default Profile;