export default function Home() {
    return (
        <section className="container home">
            <h1>steam-api</h1>
            <p>Open Source Steam API to get necessary data from Steam to implement them in your own Web or Mobile Apps. Built on NodeJS.</p>
            <p>Base Url: <span className="url_style">https://steam-api-r45u.onrender.com</span></p>

            <section className="endpointsAll">
                <h4>Endpoints</h4>
                <div className="endpoints">
                    <p className="url_style">/api/v1/user</p>
                    <p>To get user information. method: 'POST'. send 'id' in request body.</p>
                </div>
                <div className="endpoints">
                    <p className="url_style">/api/v1/recent</p>
                    <p>To get recent released games. method: 'GET'.</p>
                </div>
                <div className="endpoints">
                    <p className="url_style">/api/v1/upcoming</p>
                    <p>To get recent upcoming games. method: 'GET'.</p>
                </div>
                <div className="endpoints">
                    <p className="url_style">/api/v1/topseller</p>
                    <p>To get recent top seller games. method: 'GET'.</p>
                </div>
            </section>
        </section>
    )
}

