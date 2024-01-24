import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Navbar() {
    const [repo, setRepo] = useState({});

    const getRepo = async () => {
        const request = await fetch(`https://api.github.com/repos/irfanshadikrishad/steam-api`);
        const response = await request.json();
        if (request.status === 200) {
            setRepo(response);
        }
    }

    useEffect(() => {
        getRepo();
    }, [])
    return (
        <nav>
            <section className="container navbar">
                <NavLink to="/" className="demo">steam-api</NavLink>
                <div className='navRight'>
                    <NavLink to="/3lfx" className="demo">Demo</NavLink>
                    <a
                        href='https://github.com/irfanshadikrishad/steam-api'
                        className='github'
                        target='_blank'>
                        {<FaGithub />} <span className="count">{repo.stargazers_count}</span> <span className="star">{<FaStar />}</span>
                    </a>
                </div>
            </section>
        </nav>
    )
}
