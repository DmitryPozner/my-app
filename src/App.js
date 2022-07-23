import React from 'react'
import './styles.css';
import Content from './components/Profile'
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className = 'app-wrapper'>
      <Header /> 
      <Nav />
      <Profile />      
      <Footer />
    </div>
  );
}


export default App;
