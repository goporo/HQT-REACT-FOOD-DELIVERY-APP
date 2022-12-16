import Logo from './Logo/Logo';
import MenuList from './MenuList/MenuList';
import styles from './SideBar.module.scss';

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <MenuList />

      <img src='/assets/imgs/order.jpg' alt='Order' className={styles.img} />
    </aside>
  );
}

export default SideBar;
