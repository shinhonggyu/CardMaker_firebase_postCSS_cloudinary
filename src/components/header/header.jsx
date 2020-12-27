import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {true && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/image/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;