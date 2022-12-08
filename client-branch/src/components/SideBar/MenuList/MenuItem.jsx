import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const MenuItem = ({ href, text, Icon, badge }) => {
  return (
    <li className={styles.menuItem}>
      <NavLink to={href} className={styles.menuLink}>
        <Icon className={styles.menuItemIcon} />

        <p className={styles.menuItemText}>{text}</p>

        {badge && <div className={styles.menuBadge}>{badge}</div>}
      </NavLink>
    </li>
  );
};

export default MenuItem;
