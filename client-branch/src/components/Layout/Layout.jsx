import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.container}>
      <SideBar />

      <div className={styles.wrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
