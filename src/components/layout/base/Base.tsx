import styles from './Base.module.scss'
import { FaDiscord } from "react-icons/fa";
import { ReactElement, useContext, useEffect, useRef } from "react";
import Link from 'next/link';
import { useLoggedIn } from '../../../utils/hooks/LoggedInHook';

export function BaseLayout ({children} : {children: ReactElement}) {
  const isLoggedIn = useLoggedIn()

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };
  
  return (
    <>
      <header className={styles.header}>
        {isLoggedIn ?
          <Link href="/menu" ><a className={styles.dashboard__button}>Dashboard</a></Link> : 
          <button className={styles.login__button} onClick={handleLogin}>
          <FaDiscord size={30} />
          <span>Login with Discord</span>
          </button>
        }
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <p>Developed by GyzzakO</p>
      </footer>
    </>
  );
};
