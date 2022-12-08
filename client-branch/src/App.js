import Layout from 'components/Layout/Layout';
import HomePage from 'pages/Home/HomePage';
import MenuPage from 'pages/Menu/MenuPage';
import OrdersPage from 'pages/Orders/OrdersPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';
import ContractPage from 'pages/Contract/ContractPage';
import ProfilePage from 'pages/Profile/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={routes.home.path} replace />} />

      <Route element={<Layout />}>
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.menu.path} element={<MenuPage />} />
        <Route path={routes.orders.path} element={<OrdersPage />} />
        <Route
          path={routes.contract.path}
          element={<ContractPage />}
        />
        <Route path={routes.profile.path} element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
