import { BsGrid } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiHeart2Line } from 'react-icons/ri';
import routes from 'routes/routes';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const menuList = [
  {
    text: 'Home',
    href: routes.home.path,
    Icon: FiHome
  },
  {
    text: 'Menu',
    href: routes.menu.path,
    Icon: BsGrid
  },
  {
    text: 'Orders',
    href: routes.orders.path,
    Icon: RiHeart2Line,
    badge: 3
  },
  {
    text: 'Notifications',
    href: routes.notifications.path,
    Icon: FaBell,
    badge: 8
  },
  {
    text: 'Settings',
    href: routes.settings.path,
    Icon: IoSettingsOutline
  }
];

const MenuList = () => {
  return (
    <ul className={styles.menu}>
      {menuList.map((item, index) => {
        return <MenuItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default MenuList;
