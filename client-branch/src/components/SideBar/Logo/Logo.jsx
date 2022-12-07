import { useNavigate } from 'react-router-dom';
import routes from 'routes/routes';
import styles from './Logo.module.scss';

function Logo() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.home.path);
  };

  return (
    <div className={styles.logo} onClick={handleOnClick}>
      <div className={styles.logoImgWrapper}>
        <img src='assets/imgs/logo.png' alt='Logo' className={styles.logoImg} />
      </div>

      <p className={styles.logoText}>Foody.ABC</p>
    </div>
  );
}

export default Logo;
