import styles from './header.module.scss'
import { FaDiscord } from "react-icons/fa";

const Header = () => {

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  return (
    <header>
      <button className={styles.loginButton} onClick={handleLogin}>
        <FaDiscord size={30} />
        <span>Login with Discord</span>
      </button>
    </header>
  )
}

export default Header
