import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './scenes/loginPage';
import Header from './components/Header';
import BookList from './scenes/listingPage';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/listing" element={< BookList/>} ></Route>

      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;