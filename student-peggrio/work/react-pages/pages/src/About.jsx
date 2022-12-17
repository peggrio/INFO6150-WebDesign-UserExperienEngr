import './about.css';

function About({onNav}) {
    return (
        <>
            <div className="card">
                <img
                    src="http://placekitten.com/100/100?image=2"
                    className="cards__pic"
                    alt="cats picture"
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil illum exercitationem voluptatum cumque dignissimos velit, cum incidunt optio laboriosam natus aspernatur corrupti corporis? Dolores eligendi similique a ipsam, exercitationem soluta?</p>

                <a href="/" onClick={(e) => onNav(e, 'Home')}>
                    Learn More
                </a>
            </div>

            <div className="card">
                <img
                    src="http://placekitten.com/100/100?image=3"
                    className="cards__pic"
                    alt="cats picture"
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil illum exercitationem voluptatum cumque dignissimos velit, cum incidunt optio laboriosam natus aspernatur corrupti corporis? Dolores eligendi similique a ipsam, exercitationem soluta?</p>
            </div>

            <div className="card">
                <img
                    src="http://placekitten.com/100/100?image=4"
                    className="cards__pic"
                    alt="cats picture"
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil illum exercitationem voluptatum cumque dignissimos velit, cum incidunt optio laboriosam natus aspernatur corrupti corporis? Dolores eligendi similique a ipsam, exercitationem soluta?</p>
            </div>
        </>

    );
}

export default About;