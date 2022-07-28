import React from 'react'
import './styles.css';
import Header from './components/header'

import Footer from './components/footer';
import Todo from "./components/todo";
import Search from "./components/search-panel";
import SearchPanel from "./components/search-panel";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./components/nav";


const App = () => {
    return (

        <div className='app-wrapper'>
            <BrowserRouter>
                <Routes>


                    <Route path="/" component={Nav}/>

                </Routes>
            </BrowserRouter>
        </div>


    );
}


export default App;
