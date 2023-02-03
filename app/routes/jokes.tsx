import { Outlet } from "@remix-run/react";

export default function Jokes() {
    return (
        <main>
            <h1>Jokes Route</h1>
            <Outlet />
        </main>
    )
}