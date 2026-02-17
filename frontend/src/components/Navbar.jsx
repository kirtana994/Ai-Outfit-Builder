function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">StyleAI</div>

            <div className="nav-links">
                <a className="active">Home</a>
                <a>Upload</a>
                <a>Recommendations</a>
                <a>History</a>
            </div>
        </nav>
    );
}

export default Navbar;
