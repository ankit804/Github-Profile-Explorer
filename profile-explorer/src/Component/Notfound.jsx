import "./Notfound.css"

function Notfound({ error }) {
    return (
        <>
            <div className="error-box">
                <h1>{error}</h1>
                <p>Search it again!</p>
                <a href="/">Try Again</a>
            </div>


        </>)
}

export default Notfound;