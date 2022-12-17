import { useState } from 'react';
import './globalNav.css';
import './cssgg.css';

const menu = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about.html",
    },
    {
        name: "Cats",
        path: "/cats.html",
    },
];

function GlobalNav({ onNav, className }) {
    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    className="global-nav__link"
                    href={item.path}
                    onClick={onNav}>
                    {item.name}
                </a>
            </li>
        );
    });

    // const menuHtml = (

    //     <ul className="global-nav__list">

    //     </ul>

    // )

    const showClass = showMenu ? 'global-nav__list--open' : '';

    return (

        <nav className={`global-nav ${className}`}>
            <button className="globalNav__button" onClick={() => {
                setShowMenu(!showMenu);
            }}
                aria-label={showMenu ? "OpenMenu" : "CloseMenu"}
            ><i className="gg-menu" />
            </button>
            <ul className={`global-nav__list ${showClass}`}>
                {list}
            </ul>
            {/* {showMenu && menuHtml} */}
        </nav>


    );
}

export default GlobalNav;