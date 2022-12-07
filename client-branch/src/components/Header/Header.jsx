import { IoLocationSharp } from 'react-icons/io5';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.location}>
        <input type='text' className={styles.locationInput} />
        <IoLocationSharp className={styles.locationIcon} />
      </div>

      <div className={styles.account}>
        <div className={styles.accountWrapper}>
          <p className={styles.accountName}>Bún bò Thanh Hằng</p>
          <span className={styles.accountBranchName}>Chi nhánh Thành Thái</span>
        </div>

        <div className={styles.accountAvatarBox}>
          <img
            src='https://i.pravatar.cc/300'
            alt='Avatar'
            className={styles.accountAvatar}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
