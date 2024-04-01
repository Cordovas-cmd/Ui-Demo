import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav className="Navbar">
                <button className="navLink">Medical</button>
                <button className="navLink">Radiology</button>
                <button className="navLink">Analytics</button>
                <button className="navLink">Charts</button>
                <button className="navLink">Emergencies</button>
               
            </nav>

        </div>
    )
} 