import "./Navbar.css"
import logo from "../assets/logo.png"


function Navbar() {
    const navinfo = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/github", label: "Github" }
    ]
    return <>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navlinks">
                {navinfo.map((item) => (
                        <div className="links">
                            <a href={item.href}>{item.label}</a>
                        </div>
                    ))}
            </div>
        </nav>
    </>

}

export default Navbar;