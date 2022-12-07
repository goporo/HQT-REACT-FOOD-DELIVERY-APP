import Layout from 'components/Layout/Layout';
import HomePage from 'pages/Home/HomePage';
import MenuPage from 'pages/Menu/MenuPage';
import NotificationsPage from 'pages/Notifications/NotificationsPage';
import OrdersPage from 'pages/Orders/OrdersPage';
import SettingsPage from 'pages/Settings/SettingPages';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={routes.home.path} replace />} />

      <Route element={<Layout />}>
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.menu.path} element={<MenuPage />} />
        <Route path={routes.orders.path} element={<OrdersPage />} />
        <Route
          path={routes.notifications.path}
          element={<NotificationsPage />}
        />
        <Route path={routes.settings.path} element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;