import { useState } from "react";
import { NavLink, Outlet, useRouteLoaderData } from "react-router-dom";

function Root() {
    const [state,setState] = useState(true)
    const user = useRouteLoaderData("root")
    console.log(user.results);
    return (
        <>
<header>
    <h1>My E-Wallet</h1>
    <nav id="navLinks">
        {state ? <p className="linkBtn" onClick={() => setState((prevState) => !prevState)}><NavLink to="/addcard">Add Card</NavLink></p> :
        <p className="linkBtn" onClick={() => setState((prevState) => !prevState)}><NavLink to="/">Go back</NavLink></p>}
    </nav>
</header>
<Outlet />
        </>
    )

}

export default Root;