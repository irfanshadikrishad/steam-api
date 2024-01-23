import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    const getUser = async () => {
        const request = await fetch(`https://steam-api-r45u.onrender.com/api/v1/user`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
        const response = await request.json();
        if (request.status === 200) {
            setUser(response);
        }
    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <section className="profile">
            {<section className="profile_card">
                <section className="profile_part1">
                    <div className="image_container">
                        <img className="profile_image" src={user.avatar} alt={user.username} draggable="false" />
                        <img className="profile_frame" src={user.avatarFrame} alt={user.username} draggable="false" />
                    </div>
                    <div>
                        <div className="profile_username">{user.username} {user.actualName && `(${user.actualName})`}</div>
                        <div className="profile_level">Level: {user.level}</div>
                        <p>{user.status} {user.status === "Currently In-Game" && `(${user.gameName})`}</p>
                    </div>
                </section>
                <section className="profile_stats">
                    {user.stats && user.stats.map((user, i) => {
                        return <p key={i}>{user.title} {user.count}</p>
                    })}
                </section>
                <a
                    className="profile_add"
                    href={`https://steamcommunity.com/id/${id}`}
                    target="_blank">{<IoPersonAddSharp />}
                </a>
            </section>}
        </section>
    )
}
