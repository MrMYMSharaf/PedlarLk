import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/shared/Layout';
import Categories from './components/pages/Categories';
import Offers from './components/pages/Offers';
import Page from './components/pages/Page';
import Myads from './components/pages/Myads';
import Groups from './components/pages/Groups';
import ViewAllAds from './components/pages/ViewAllAds';
import NoPage from './components/pages/Error/NoPage';
import MyNeeds from './components/pages/MyNeeds';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPasswort from './components/Auth/ForgotPasswort';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path="offers" element={<Offers />} />
          <Route path="page" element={<Page />} />
          <Route path="groups" element={<Groups />} />
          <Route path="myads" element={<Myads />} />
          <Route path="viewallads" element={<ViewAllAds />} />
          <Route path="categories" element={<Categories />} />
          <Route path="myneeds" element={<MyNeeds />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        {/* Authentication routes */}
        <Route path="auth">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotPasswort" element={<ForgotPasswort />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
