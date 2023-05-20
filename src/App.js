import './App.css';
import NavigationBar from './components/nav/navbar';
import HomePage from './UI/homePage';
import LoginPage from './UI/loginPage';
import SignUpPage from './UI/signupPage';
import ListDoctorsPage from './UI/listDoctorsPage';
import DoctorPage from './UI/doctorPage';
import ReviewsPage from './UI/reviewsPage';
import AdminPage from './UI/adminPage';
import AdminDoctorsPage from './UI/adminDoctorsPage';
import ScrapDoctorsPage from './UI/scrapDoctorsPage';
import AdminUsersPage from './UI/adminUsersPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './scrolToTop';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="signin" element={<LoginPage></LoginPage>} />
        <Route path="signup" element={<SignUpPage></SignUpPage>} />
        <Route path="doctors" element={<ListDoctorsPage></ListDoctorsPage>} />
        <Route path="doctors/:docID" element={<DoctorPage></DoctorPage>} />
        <Route path="reviews/:docID" element={<ReviewsPage></ReviewsPage>} />
        
      </Route>
      <Route path="/admin">
        <Route index element={<AdminPage></AdminPage>} />
        <Route path="doctors" element={<AdminDoctorsPage></AdminDoctorsPage>} />
        <Route path="users" element={<AdminUsersPage></AdminUsersPage>} />
        <Route path="scrap-doctors" element={<ScrapDoctorsPage></ScrapDoctorsPage>} />
      </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
