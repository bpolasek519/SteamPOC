import { useEffect, useState } from 'react';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './pages/Layout'
import CumulativeHours from "./pages/CumulativeHours";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Navigate to='/CumulativeHours' replace/>}/>
                        <Route path='/CumulativeHours' element={<CumulativeHours />}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;