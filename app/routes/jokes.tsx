import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };

export default function Jokes() {
    return (
        <main>
            <h1>Jokes Route</h1>
            <Outlet />
        </main>
    )
}