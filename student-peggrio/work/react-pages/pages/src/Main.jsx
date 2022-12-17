
import Home from './Home';
import About from './About';
import Cats from './Cats';
import './main.css';

function Main({ page, onNav }) {
    return (
        <main>

            {(page === "/") && <Home />}
            {(page === '/about.html') && <About onNav={onNav} />}
            {(page === '/cats.html') && <Cats />}
        </main>

    );
}

export default Main;