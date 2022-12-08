import { BsGrid } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { RiHeart2Line } from 'react-icons/ri';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';


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
    text: 'Contract',
    href: routes.contract.path,
    Icon: BsReverseLayoutTextWindowReverse,
    badge: 8
  },
  {
    text: 'Profile',
    href: routes.profile.path,
    Icon: AiOutlineUser
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
