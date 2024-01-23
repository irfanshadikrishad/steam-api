import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    console.log(user);
    useEffect(() => {
        getUser();
    }, [])
    return (
        <section>
            <div>{id}</div>
        </section>
    )
}
