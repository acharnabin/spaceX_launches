import React from 'react'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar'


const App = () => {
    return (
        <div className="app">
        <h3 className="text-center text-black-50">Space X </h3>
        <div className="app_container container-fluid row">
            <div className="col-xs-3 col-md-3 col-sm-12 app_sidebar">
                <Sidebar/>
            </div>
            <div className="col-xs-9 col-md-9 col-sm-12 app_sidebar">
                <Home/>
            </div>
        </div>
            
            
        </div>
    )
}

export default App
