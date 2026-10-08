    import "./Navbar.css"
    import logo from "../assets/logo.png"


    function Navbar() {
        const navinfo = [
            { href: "/", label: "Home", id: 1 },
            { href: "/about", label: "About", id: 2 },
            { href: "/github", label: "Github", id: 3 }
        ]
        return <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navlinks">
                    {navinfo.map((item) => (
                        <div className="links" key={item.id}>
                            <a href={item.href}>{item.label}</a>
                        </div>
                    ))}
                </div>
            </nav>
        </>

    }

    export default Navbar;