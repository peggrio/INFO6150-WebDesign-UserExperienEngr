function NavBar({ setPage }) {
    function onNav(event, target) {
        event.preventDefault();
        setPage(target);
    }
    return (
        <div>
            <a href="/" onClick={(e) => onNav(e, 'Home')}>
                Home
            </a>
            <a href="/" onClick={(e) => onNav(e, 'About')}>
                About
            </a>
            NavBar
        </div>
    );
}

export default NavBar;