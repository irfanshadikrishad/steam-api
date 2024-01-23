import { useParams } from "react-router-dom";

export default function Profile() {
    const { id } = useParams();

    return (
        <section>
            <div>{id}</div>
        </section>
    )
}
