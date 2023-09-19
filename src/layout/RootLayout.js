import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export function RootLayout() {
    return (
        <>
            <header>
                <h1>Bem vindo</h1>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                </ul>
            </header>

            <Outlet />

            <footer className={styles.footer}>Copyright 2023. Todos os direitos reservados.</footer>
        </>
    );
}
