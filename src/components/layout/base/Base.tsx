import styles from './Base.module.scss'
import { FaDiscord } from "react-icons/fa";
import { ReactElement } from "react";

export function BaseLayout ({children} : {children: ReactElement}) {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.loginButton} onClick={handleLogin}>
          <FaDiscord size={30} />
          <span>Login with Discord</span>
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <p>Developed by GyzzakO</p>
      </footer>
    </>
  );
};
