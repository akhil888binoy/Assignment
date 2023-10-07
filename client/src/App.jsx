import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './scenes/loginPage';
import Header from './components/Header';
import BookList from './scenes/listingPage';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function App() {
  const isAuth = Boolean(useSelector((state) => state.token));


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/listing"  element={isAuth ? <BookList /> : <Navigate to="/" />} ></Route>

      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;